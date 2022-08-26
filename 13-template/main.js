
//페이지 로드 이벤트

window.addEventListener("load", ()=>{
    // 배치할 요소를 감싸고 있는 부모 요소명
    const grid = new Isotope("section", {
        // 배치할 요소명
        itemSelector: "article",
        // 너비값을 구할 요소명
        columnwidth: "article",
        // 화면 재패치 시 요소가 움직이는 속도 
        transitionDuration: "0.4s"
    });

     // 클릭한 모든 버튼 변수에 저장
     const btns = document.querySelectorAll("main ul li");

     //버늩의 개수만큼 반복해서 
     for(let el of btns) {
        // 각 버튼에 클릭 이벤트 연결
        el.addEventListener('[click', e=> {
            e.preventDefault();

            // 변수 sort에 클릭한 대상으 ㅣ자식인 a 요소의 href 속성값 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            // grid에 저장된 결괏값을 불러와 재정렬 기능 연결
            grid.arrange({
                // 옵션값으로 sort 변숫값 지정
                filter : sort
            });

            // 다시 모든 버튼의 개수만큼 반복해서
            for(let el of btns) {
                // 각 버튼의 클래스명 "on" 을 제거해 비활성화
                el.classList.remove("on");
            }

            // 클릭한 대상만 선택해서 클래스명 on을 추가해 활성화
            e.currentTarget.classList.add("on");
        })
     }

});


// 자주 수정할 수 있는 정봇값들을 상단에 전역 변수로 설정
const frame = "section";
const box = "article";
const speed = "0.5s";
const btn =document.querySelectorAll("main ul li");
let grid; //플러그인의 정봇값이 담길 변수를 이곳에 전역으로 설정

// 이미지 소스를 활용한 모든 컨텐츠의 로딩이 완료되면
window.addEventListener("load", ()=>{
    init(); //화면 초기화 함수 호출
    filter(btn); //정렬 버튼 기능의 함수 호출
});

// 화면 초기화 함수 정의
function init () {
    // 변수 grid에 담길 결괏값이 다른 함수인 filter에서도 활용되어야 하므로 
    //전역 변수로 선언
    grid = new Isotope(frame, {
        itemSelector: box,
        columnwidth: box,
        transitionDuration: speed
    });
}

// 정렬 버튼 기능의 함수 정의
function filter(arr){ //매개 변수 arr을 통해 반복하는 버튼 그룹을 인수로 전달
    for(let el of arr) {
        el.addEventListener("click", e=>{
            e.preventDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            });

            for(let el of arr)  {
                el.classList.remove(activeClass);
            }

            e.currentTarget.classList.add(activeClass);
        })
    }
}