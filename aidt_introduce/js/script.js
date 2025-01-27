document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header'); // 헤더 요소 가져오기
    const navMenuLinks = document.querySelectorAll('.nav_menu a'); // 메뉴 링크 가져오기

    // 헤더 높이를 동적으로 가져오고 CSS 변수로 설정
    function updateHeaderHeight() {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }

    // 초기 헤더 높이 설정
    updateHeaderHeight();

    // 윈도우 리사이즈 시 헤더 높이 다시 계산
    window.addEventListener('resize', updateHeaderHeight);

    // 부드러운 스크롤과 활성화된 메뉴 처리
    navMenuLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // 기본 앵커 동작(페이지 이동)을 막음

            // 모든 메뉴 항목에서 'active' 클래스를 제거
            document.querySelectorAll('.nav_menu li').forEach(li => li.classList.remove('active'));

            // 클릭한 메뉴 항목에 'active' 클래스 추가
            this.parentElement.classList.add('active');

            // 대상 섹션으로 스크롤 이동
            const targetId = this.getAttribute('href').slice(1); // 대상 ID 가져오기 (예: "home")
            const targetElement = document.getElementById(targetId); // ID에 해당하는 요소 가져오기

            if (targetElement) {
                const navHeight = header.offsetHeight; // 헤더 높이 가져오기
                const targetPosition = targetElement.offsetTop - navHeight; // 위치를 헤더 높이만큼 보정
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // 부드러운 스크롤 효과
                });
            }
        });
    });
});
