export default function countPackages(carriers, carrierID) {
  let diagram = {};
  let result = 0;

  carriers.forEach((element) => {
    const workers = [];

    element[2].forEach((worker) => {
      workers.push(worker);
    });
    diagram = {
      ...diagram,
      [element[0]]: { capacity: element[1], workers },
    };
  });

  let memo = [carrierID];
  while (memo.length > 0) {
    memo.forEach((worker) => {
      result += diagram[worker].capacity;
      diagram[worker].workers.forEach((element) => {
        memo.push(element);
      });
      memo = memo.filter((e) => worker !== e);
    });
  }

  return result;
}
