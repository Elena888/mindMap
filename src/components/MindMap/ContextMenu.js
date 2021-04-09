import React, { useState } from "react"
import { connect } from "react-redux"
import { IconButton, Drawer, TextField, Button } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"
import { editNodeData, deleteNode } from "../../redux/actions/mindMapActions"

import css from "./MindMap.module.scss"

const NodeContextMenu = ({ x = 0, y = 0, id, editNodeData, deleteNode }) => {
   const [value, setValue] = useState("")
   const [openDrawer, setOpenDrawer] = useState(false)
   const handleEdit = () => {
      setOpenDrawer(true)
   }

   const toggleDrawer = (event, open) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
         return
      }

      setOpenDrawer(open)
   }
   const handleSubmit = (e) => {
      e.preventDefault()

      if (value.length > 0) {
         editNodeData({ id, value })
         setOpenDrawer(false)
      } else {
         alert("Empty field")
      }
   }

   const handleDelete = () => {
      deleteNode({ id })
   }

   return (
      <>
         <div className={css.contextMenu} style={{ position: "absolute", left: x + 200, top: y }}>
            <IconButton onClick={handleEdit}>
               <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
               <CloseIcon />
            </IconButton>
         </div>
         <Drawer anchor="right" open={openDrawer} onClose={(e) => toggleDrawer(e, false)}>
            <div className={css.contextMenu__drawer}>
               <form autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                     id="outlined-basic"
                     variant="outlined"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <Button type="submit">Save</Button>
               </form>
            </div>
         </Drawer>
      </>
   )
}

export default connect(null, { editNodeData, deleteNode })(NodeContextMenu)
