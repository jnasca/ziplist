/**
 * Ziplist
 * Created by Joseph on 9/19/2016.
 */

const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function zipList(listA, listB) {
  const list = [];

  for (let i = 0; i < list1.length; i += 1) {
    list.push(listA[i]);
    list.push(listB[i]);
  }
  return list;
}

function zipListTheSimpleWay(listA, listB) {
  const list = _.flatten(_.zip(listA, listB));
  return list;
}

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
