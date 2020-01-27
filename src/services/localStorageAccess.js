// 크롬 스토리지 api를 간결하게 사용하기 위한 모듈


export function localStorageGet(arr) {
  try {
    return new Promise(function (resolve, reject) {
      chrome.storage.local.get(arr, result => {
        resolve(result);
      });
    });
  } catch {
    console.log("로컬 스토리지에서 데이터를 불러올 수 없습니다")
  }
}

export function localStorageSet(obj) {
  try {
    chrome.storage.local.set(obj, function () {
      console.log("데이터가 저장됐습니다");
    });
  } catch{
    console.log("로컬 스토리지 데이터 저장에 실패했습니다.");
  }
}

export function localStorageRemove(arr) {
  try {
    chrome.storage.local.remove(arr, function () {
      console.log("로컬 스토리지 데이터를 수정합니다");
    });
  } catch {
    console.log("로컬 스토리지 데이터를 수정할 수 없습니다")
  }
}