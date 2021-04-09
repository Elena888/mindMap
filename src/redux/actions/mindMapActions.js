import { SET_NODE_COORDS, EDIT_NODE_DATA, DELETE_NODE } from "./actionTypes"

export const editNodeData = (data) => ({
   type: EDIT_NODE_DATA,
   payload: data,
})

export const setCoords = (data) => ({
   type: SET_NODE_COORDS,
   payload: data,
})

export const deleteNode = (data) => ({
   type: DELETE_NODE,
   payload: data,
})
