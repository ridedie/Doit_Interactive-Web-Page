

//페이지 로드 이벤트

window.addEventListener("load", ()=>{
    // 배치할 요소를 감싸고 있는 부모 요소명
    const grid = new Isotope("section", {
        // 배치할 요소명
        itemSelector: "article",
        // 너비값을 구할 요소명
        columnwidth: "article",
        // 화면 재패치 시 요소가 움직이는 속도 
        transitionDuration: "0.5s"
    });
});