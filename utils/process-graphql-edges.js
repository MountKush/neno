/**
 * Extracts GraphQl node(s) from an Array of edges
 * @param {array} edges Array of GraphQl edges containing nodes
 * @return {[object]} GraphGL node(s)
 */
export const processGraphQLEdges = (edges) =>
  edges.map((edge) =>
    ({ ...edge.node })
  )
