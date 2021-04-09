import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import G6 from "@antv/g6"
import { setCoords } from "../../redux/actions/mindMapActions"
import ContextMenu from "./ContextMenu"

G6.registerNode(
   "customNode",
   (cfg) => `

   <rect style={{
      width: 200, height:60, fill:'#fff', stroke: ${
         cfg.color
      }, radius: [6, 6, 6, 6]}} keyshape="true" name="test"  draggable="true">
      <text
         style={{
            marginTop: 10,
            marginLeft: 100,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            fill: ${cfg.color}
         }}
         draggable="true"
         name="title">${cfg.label}</text>
         <rect style={{
            width: 100, height:1, marginLeft: 50,marginTop: 15, fill:${cfg.color},  
          }}  draggable="true"></rect>
         <text
         style={{
            marginTop: 20,
            marginLeft: 100,
            textAlign: 'center',
            fontSize: 16,
            fill:${cfg.color}
         }}
         draggable="true"
         name="title">${cfg.description || cfg.id}</text>
         
    </rect>`
)

const MindMap = ({ data, setCoords }) => {
   const ref = React.useRef(null)
   // let graph = null

   const [graph, setGraph] = useState(null)
   const [showNodeContextMenu, setShowNodeContextMenu] = useState(false)
   const [nodeContextMenuX, setNodeContextMenuX] = useState(0)
   const [nodeContextMenuY, setNodeContextMenuY] = useState(0)
   const [nodeContextMenuId, setNodeContextMenuId] = useState(null)

   const bindEvents = () => {
      graph.on("node:contextmenu", (evt) => {
         evt.preventDefault()
         const { item } = evt
         const model = item.getModel()
         const { x, y, id } = model

         const point = graph.getCanvasByPoint(x, y)
         setNodeContextMenuX(point.x)
         setNodeContextMenuY(point.y)
         setNodeContextMenuId(id)
         setShowNodeContextMenu(true)
      })
      graph.on("canvas:click", () => {
         setShowNodeContextMenu(false)
      })
      graph.on("node:dragend", (evt) => {
         evt.preventDefault()
         const { item } = evt
         const model = item.getModel()
         const { x, y, id } = model
         setCoords({ x, y, id })
      })
   }

   useEffect(() => {
      setGraph(
         new G6.Graph({
            container: ref.current,
            width: 1200,
            height: 800,
            modes: {
               default: ["drag-canvas", "zoom-canvas", "drag-node"],
            },
            layout: {
               nodeSize: 200,
               preventOverlap: true,
            },
            defaultNode: {
               type: "customNode",
            },
            defaultEdge: {
               type: "line",
               style: {
                  endArrow: true,
               },
            },
         })
      )

      /*************Make stroke as line color on node */
      // const edges = graph.getEdges()
      // edges.forEach((edge) => {
      //    const line = edge.getKeyShape()
      //    const stroke = line.attr("stroke")
      //    const targetNode = edge.getTarget()
      //    targetNode.update({
      //       style: { stroke },
      //    })
      // })
      // graph.paint()
   }, [])

   useEffect(() => {
      if (graph) {
         graph.data(data)
         graph.render()
         bindEvents()
      }
   }, [graph])

   useEffect(() => {
      if (graph) {
         graph.changeData(data)
         setShowNodeContextMenu(false)
      }
   }, [data])

   return (
      <div ref={ref}>
         {showNodeContextMenu && <ContextMenu x={nodeContextMenuX} y={nodeContextMenuY} id={nodeContextMenuId} />}
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      data: state.mindMap.data,
   }
}
export default connect(mapStateToProps, { setCoords })(MindMap)
