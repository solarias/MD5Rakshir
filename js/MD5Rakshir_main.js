﻿//=================================================================================================================
//※ 선로드 & 실행
//=================================================================================================================
window.onload = function() {
	//1. 로딩 버튼 활성화 (페이지 로딩 동안 누르지 못하게 함)
	$("#loading_run").disabled = "";
		//1-1. 버튼 이름 변경
		$("#loading_run").innerHTML = "게임 실행";
		//1-2. 포커스
		$("#loading_run").focus();
	//2. 로딩 버튼 설정
	$("#loading_run").onclick = function() {
		//2-1. 버튼 비활성화
		$("#loading_run").innerHTML = "로딩 중...";
		$("#loading_run").disabled = "disabled";
		//2-2. 선로딩 실시
		preload();
	};
}
/**/





//=================================================================================================================
//※ 선로딩 함수
//=================================================================================================================
function preload() {
	//A. 선로드 - 음악
	try {
		for (var property in track_sfx) {
			//A-0. 사운드이펙트만 저장 실시 (value가 문자열로 되어있음)
			if (track_sfx.hasOwnProperty(property) && typeof track_sfx[property] == "string") {
				//A-1. soundList - track에 등록된 음악 '이름'으로 property 개설
				soundList[property] = [];
				
				//A-2. soundList - 각 property에 sameAudio 개수만큼 음악 주소를 new Audio로 등록함
				for (var i = 0; i < sameAudio ; i++) {
					soundList[property].push( new Audio(track_sfx[property]) );
				}
				
				//A-3. soundList - track에 등록된 음악마다 '0'을 등록
				playList[property] = 0;
			}
		}
	} catch(e) {}
	
	//B. 선로드 - 이미지
		//B-1. 배경화면
		/*imageList.push("./images/background/seatrain.jpg");*/
		imageList.push("http://cfile220.uf.daum.net/image/225CD83E562204AD04325D");
		/*imageList.push("./images/background/street.jpg");*/
		imageList.push("http://cfile205.uf.daum.net/image/222F523E562204AF2E959C");
		/*imageList.push("./images/background/tower.jpg");*/
		imageList.push("http://cfile216.uf.daum.net/image/2536753E562204B02651B9");
		/*imageList.push("./images/background/night.jpg");*/
		imageList.push("http://cfile225.uf.daum.net/image/235E003E562204AD03A589");
		/*imageList.push("./images/background/forest.jpg");*/
		imageList.push("http://cfile216.uf.daum.net/image/2523F43E562204AC3541A1");
		/*imageList.push("./images/background/bakal.jpg");*/
		imageList.push("http://cfile214.uf.daum.net/image/212D153E562204AA2EE15B");
		//B-2. 사인
		/*imageList.push("./images/sign_ready.png");*/
		imageList.push("http://cfile202.uf.daum.net/image/261D4F42562204DB11303A");
		/*imageList.push("./images/sign_fight.png");*/
		imageList.push("http://cfile221.uf.daum.net/image/2707E742562204DA203C4C");
		
		/*imageList.push("./images/sign_rage.png");*/
		imageList.push("http://cfile216.uf.daum.net/image/2212B642562204DB1A7CAA");
		
		/*imageList.push("./images/sign_timeover.png");*/
		imageList.push("http://cfile211.uf.daum.net/image/24780542562204DC327892");
		/*imageList.push("./images/sign_win.png");*/
		imageList.push("http://cfile211.uf.daum.net/image/217B6F42562204DD30D539");
		/*imageList.push("./images/sign_draw.png");*/
		imageList.push("http://cfile215.uf.daum.net/image/251B0D42562204D91333A2");
		//B-3. 이펙트
		/*imageList.push("./images/sprite_effect_hit_0.png");*/
		imageList.push("http://cfile223.uf.daum.net/image/2209AB42562204DE23D6E3");
		/*imageList.push("./images/sprite_effect_hit_1.png");*/
		imageList.push("http://cfile228.uf.daum.net/image/245BC63F562204DF13A38D");
		/*imageList.push("./images/sprite_effect_hit_2.png");*/
		imageList.push("http://img2.ruliweb.daum.net/mypi/gup/a/125/5/o/4919037950.jpg");
		/*imageList.push("./images/sprite_effect_hit_3.png");*/
		imageList.push("http://img2.ruliweb.daum.net/mypi/gup/a/125/5/o/4919037951.jpg");
		/*imageList.push("./images/sprite_effect_particle.png");*/
		imageList.push("http://img2.ruliweb.daum.net/mypi/gup/a/125/5/o/4919037952.jpg");
		/*imageList.push("./images/sprite_glass.png");*/
		imageList.push("http://img2.ruliweb.daum.net/mypi/gup/a/125/5/o/4919037963.jpg");
		/*imageList.push("./images/effect_critical.png");*/
		imageList.push("http://cfile240.uf.daum.net/image/2104D544562204D3254D31");
		/*imageList.push("./images/effect_critical_appear.png");*/
		imageList.push("http://cfile227.uf.daum.net/image/2305A944562204D4240206");
		//B-4. 아이콘
		/*imageList.push("./images/icon_atk.png");*/
		imageList.push("http://cfile216.uf.daum.net/image/230DF244562204D51CE436");
		/*imageList.push("./images/icon_def.png");*/
		imageList.push("http://cfile228.uf.daum.net/image/222BD644562204D701D0DA");
		/*imageList.push("./images/icon_option.png");*/
		imageList.push("http://cfile212.uf.daum.net/image/2109A344562204D82004F7");
		//B-5. 기타
		/*imageList.push("./images/card_back.png");*/
		imageList.push("http://cfile220.uf.daum.net/image/242D453856220669290CE9");
		/*imageList.push("./images/door.jpg");*/
		imageList.push("http://cfile203.uf.daum.net/image/21786044562204D22E744C");
	
	//C. 선로드 개시
	loadImages(imageList,function() {
		
		//D. 창 전환
			//D-1. 로딩 창 제거
			$("#frame_loading").style.display = "none";
			//D-2. 입력 창 표시
			$("#frame_input").style.display = "block";
		
		//E. 실행
		main();
		
					
		//F. 번외 : "플레이어 1 이름" 입력란 포커스
		$("#input_name_1").focus();
	});
}
/**/





//=================================================================================================================
//※ 실행 함수
//=================================================================================================================
function main() {
	//각종 입력칸 - 활성화 시 전체 내용 드래그 되도록
	$("#input_name_1").onfocus = function() {
		this.select();
	}
	$("#input_name_2").onfocus = function() {
		this.select();
	}
	$("#input_rate_1").onfocus = function() {
		this.select();
	}
	$("#input_rate_2").onfocus = function() {
		this.select();
	}
	
	//옵션 버튼
	$("#input_option_open").onclick = function() {
		if (!hasClass($("#input_option_open"),"close")) {
			//클래스 변경
			addClass($("#input_option_open"),"close")
			//문구 변경
			$("#input_option_open").innerHTML = "<img src='http://cfile212.uf.daum.net/image/2109A344562204D82004F7'><p>설정 닫기</p>";
			//창 열기
			$("#input_option").style.display = "block";
		} else {
			//클래스 변경
			removeClass($("#input_option_open"),"close")
			//문구 변경
			$("#input_option_open").innerHTML = "<img src='http://cfile212.uf.daum.net/image/2109A344562204D82004F7'><p>게임 설정</p>";
			//창 닫기
			$("#input_option").style.display = "none";
		}
	}
	
	//게임 실행 버튼
	$("#input_run").onclick = function() {
		run();
	}
	
}

//게임 실행 함수
function run() {
	//1. 각종 옵션 적용
		//a. 입력사항 체크
			//a-1. 플레이어 1 이름
			$("#battle_name_1").innerHTML = $("#input_name_1").value;
				//IF (이름이 있으면 ) ? 이름 영역 표시
				if ($("#input_name_1").value != "") {
					$("#battle_name_1").style.display = "block";
				//ELSE (아니면) ? 이름 영역 미표시
				} else {
					alert("※ 경고 : 플레이어 1의 이름을 입력하세요.")
					return;
				}
			//a-2. 플레이어 2 이름
			$("#battle_name_2").innerHTML = $("#input_name_2").value;
				//IF (이름이 있으면 ) ? 이름 영역 표시
				if ($("#input_name_2").value != "") {
					$("#battle_name_2").style.display = "block";
				//ELSE (아니면) ? 이름 영역 미표시
				} else {
					alert("※ 경고 : 플레이어 2의 이름을 입력하세요.")
					return;
				}
			//a-3. 플레이어 1 승률
				//IF (공란이면 or 숫자가 입력되어있지 않으면)
				if ($("#input_rate_1").value == "" || ! isNumber($("#input_rate_1").value)) {
					alert("※ 플레이어 1의 득표율이 제대로 입력되지 않았습니다.");
					return;
				//IF (숫자가 0보다 작거나 100보다 크면)
				} else if (parseInt($("#input_rate_1").value) < 0 || parseInt($("#input_rate_1").value) > 100) {
					alert("※ 플레이어 1의 득표율이 0보다 작거나 100보다 큽니다.");
					return;
				}
			//a-4. 플레이어 2 승률
				//IF (공란이면 or 숫자가 입력되어있지 않으면)
				if ($("#input_rate_2").value == "" || ! isNumber($("#input_rate_2").value)) {
					alert("※ 플레이어 2의 득표율이 제대로 입력되지 않았습니다.");
					return;
				//IF (숫자가 0보다 작거나 100보다 크면)
				} else if (parseInt($("#input_rate_2").value) < 0 || parseInt($("#input_rate_2").value) > 100) {
					alert("※ 플레이어 2의 득표율이 0보다 작거나 100보다 큽니다.");
					return;
				}
		//b. 각 플레이어 능력치 적용
		for (var num=1;num<=2;num++) {
			setCharacter(num,$("#input_name_" + num.toString()).value, $("#input_rate_" + num.toString()).value);
		}
		//c. 게임 속도 적용
			game["speed"] = $("#input_option_speed").value;
		//d. 배경 테마 적용
			game["theme_selected"] = $("#input_option_theme").value;
		//e. BGM 적용 (미지원이 아닐 때만)
			if (game["bgm"] != -1) {
				if ($("#input_option_bgm").checked) {
					game["bgm"] = 1;
				} else {
					game["bgm"] = 0;
				}
			}
		//f. 사운드 이펙트 적용 (미지원이 아닐 때만)
			if (game["sfx"] != -1) {
				if ($("#input_option_sfx").checked) {
					game["sfx"] = 1;
				} else {
					game["sfx"] = 0;
				}
			}
	//2. 버튼 설정
		//2-1. frame_input 내 input, select button 모두 비활성화
		var controlList = $$("#frame_input input, #frame_input button, #frame_input select")
		for (var i = 0;i < controlList.length;i++) {
			controlList[i].disabled = "disabled";
		}
		//2-2. 옵션창 닫기 & 버튼 복구
			//옵션창 닫기
			$("#input_option").style.display = "none";
			//버튼 복구
				//클래스 변경
				removeClass($("#input_option_open"),"close")
				//문구 변경
				$("#input_option_open").innerHTML = "<img src='http://cfile212.uf.daum.net/image/2109A344562204D82004F7'><p>게임 설정</p>";
				//창 닫기
				$("#input_option").style.display = "none";
		//2-3. "대전 종료" 버튼 설정
			//a. '리셋'으로 변경
			addClass($("#input_run"),"reset");
			//b. 문구 변경
			$("#input_run").value = "준비 중...";
			//c. 클릭 이벤트 변경
			$("#input_run").onclick = function() {
				battle_end();
			}
	
	//3. 도움말 제거
	$("#frame_help").style.display = "none";
	
	//3. 실행
	battle_ready("open", null, 0);
}