
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = (list1, list2) => {
  const merge = (node1, node2) => {
    if(!node1 || !node2) return node1 || node2;
    if(node1.val < node2.val) {
        node1.next = merge(node1.next, node2);
        return node1;
    }
    node2.next = merge(node1, node2.next);
    return node2;
}
return merge(list1, list2);
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))