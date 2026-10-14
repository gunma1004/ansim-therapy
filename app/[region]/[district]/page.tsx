import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://ansim-therapy.netlify.app";
const PHONE_NUMBER = "0507-1280-3199";
const PHONE_RAW = "0507-1280-3199";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
}

function safeDecode(str: string): string {
  if (!str) return "";
  let decoded = str;
  try {
    decoded = decodeURIComponent(decodeURIComponent(str));
  } catch {
    try {
      decoded = decodeURIComponent(str);
    } catch {
      decoded = str;
    }
  }
  return decoded.trim();
}

function getRegionFullName(region: string): string {
  switch (region?.toLowerCase()) {
    case "seoul":
      return "서울특별시";
    case "gyeonggi":
      return "경기도";
    case "incheon":
      return "인천광역시";
    default:
      return region || "";
  }
}

// 🌟 수도권 전체 지역 / 구 / 동 데이터 맵
const regionData: Record<
  string,
  { name: string; districts: Record<string, { name: string; dongs: string[] }> }
> = {
  seoul: {
    name: "서울특별시",
    districts: {
      jongno: { name: "종로구", dongs: ["청운동", "효자동", "사직동", "삼청동", "부암동", "평창동", "무악동", "교남동", "가회동", "종로1.2.3.4가동", "종로5.6가동", "이화동", "혜화동", "창신1동", "창신2동", "창신3동", "숭인1동", "숭인2동"] },
      jung: { name: "중구", dongs: ["소공동", "회현동", "명동", "필동", "장충동", "광희동", "을지로동", "신당동", "다산동", "약수동", "청구동", "동화동", "황학동", "중림동"] },
      yongsan: { name: "용산구", dongs: ["후암동", "용산2가동", "남영동", "청파동", "원효로1동", "원효로2동", "효창동", "용문동", "이촌1동", "이촌2동", "이태원1동", "이태원2동", "한남동", "서빙고동", "보광동"] },
      seongdong: { name: "성동구", dongs: ["왕십리2동", "왕십리도선동", "마장동", "사근동", "행당1동", "행당2동", "응봉동", "금호1가동", "금호2.3가동", "금호4가동", "옥수동", "성수1가1동", "성수1가2동", "성수2가1동", "성수2가3동", "송정동", "용답동"] },
      gwangjin: { name: "광진구", dongs: ["중곡1동", "중곡2동", "중곡3동", "중곡4동", "능동", "구의1동", "구의2동", "구의3동", "광장동", "자양1동", "자양2동", "자양3동", "자양4동", "화양동", "군자동"] },
      dongdaemun: { name: "동대문구", dongs: ["신설동", "용두동", "제기동", "전농1동", "전농2동", "답십리1동", "답십리2동", "장안1동", "장안2동", "청량리동", "회기동", "휘경1동", "휘경2동", "이문1동", "이문2동"] },
      jungnang: { name: "중랑구", dongs: ["면목본동", "면목2동", "면목3.4동", "면목5동", "면목7동", "상봉1동", "상봉2동", "중화1동", "중화2동", "묵1동", "묵2동", "망우본동", "망우3동", "신내1동", "신내2동"] },
      seongbuk: { name: "성북구", dongs: ["성북동", "삼선동", "동선동", "돈암1동", "돈암2동", "안암동", "보문동", "정릉1동", "정릉2동", "정릉3동", "정릉4동", "길음1동", "길음2동", "종암동", "월곡1동", "월곡2동", "장위1동", "장위2동", "장위3동", "석관동"] },
      gangbuk: { name: "강북구", dongs: ["삼양동", "미아동", "송중동", "송천동", "삼각산동", "번1동", "번2동", "번3동", "수유1동", "수유2동", "수유3동", "우이동", "인수동"] },
      dobong: { name: "도봉구", dongs: ["창1동", "창2동", "창3동", "창4동", "창5동", "도봉1동", "도봉2동", "쌍문1동", "쌍문2동", "쌍문3동", "쌍문4동", "방학1동", "방학2동", "방학3동"] },
      nowon: { name: "노원구", dongs: ["상계1동", "상계2동", "상계3.4동", "상계5동", "상계6.7동", "상계8동", "상계9동", "상계10동", "중계본동", "중계1동", "중계2.3동", "중계4동", "하계1동", "하계2동", "공릉1동", "공릉2동"] },
      eunpyeong: { name: "은평구", dongs: ["불광1동", "불광2동", "갈현1동", "갈현2동", "구산동", "대조동", "응암1동", "응암2동", "응암3동", "역촌동", "신사1동", "신사2동", "증산동", "수색동", "진관동"] },
      seodaemun: { name: "서대문구", dongs: ["천연동", "북아현동", "충현동", "신촌동", "연희동", "홍제1동", "홍제2동", "홍제3동", "홍은1동", "홍은2동", "남가좌1동", "남가좌2동", "북가좌1동", "북가좌2동"] },
      mapo: { name: "마포구", dongs: ["공덕동", "아현동", "도화동", "용강동", "대흥동", "염리동", "신수동", "서교동", "합정동", "망원1동", "망원2동", "연남동", "성산1동", "성산2동", "상암동"] },
      yangcheon: { name: "양천구", dongs: ["목1동", "목2동", "목3동", "목4동", "목5동", "신월1동", "신월2동", "신월3동", "신월4동", "신월5동", "신월6동", "신월7동", "신정1동", "신정2동", "신정3동", "신정4동", "신정6동", "신정7동"] },
      gangseo: { name: "강서구", dongs: ["등촌1동", "등촌2동", "등촌3동", "화곡본동", "화곡1동", "화곡2동", "화곡3동", "화곡4동", "화곡8동", "우장산동", "가양1동", "가양2동", "가양3동", "발산1동", "공항동", "방화1동", "방화2동", "방화3동"] },
      guro: { name: "구로구", dongs: ["신도림동", "구로1동", "구로2동", "구로3동", "구로4동", "구로5동", "가리봉동", "고척1동", "고척2동", "개봉1동", "개봉2동", "개봉3동", "오류1동", "오류2동", "수궁동"] },
      geumcheon: { name: "금천구", dongs: ["가산동", "독산1동", "독산2동", "독산3동", "독산4동", "시흥1동", "시흥2동", "시흥3동", "시흥4동", "시흥5동"] },
      yeongdeungpo: { name: "영등포구", dongs: ["영등포본동", "영등포동", "여의동", "당산1동", "당산2동", "도림동", "문래동", "양평1동", "양평2동", "신길1동", "신길3동", "신길4동", "신길5동", "신길6동", "신길7동", "대림1동", "대림2동", "대림3동"] },
      dongjak: { name: "동작구", dongs: ["노량진1동", "노량진2동", "상도1동", "상도2동", "상도3동", "상도4동", "흑석동", "사당1동", "사당2동", "사당3동", "사당4동", "사당5동", "대방동", "신대방1동", "신대방2동"] },
      gwanak: { name: "관악구", dongs: ["보라매동", "청림동", "성현동", "행운동", "낙성대동", "청룡동", "은천동", "상현동", "서원동", "신원동", "서림동", "신사동", "난향동", "조원동", "대학동", "난곡동", "삼성동", "미성동"] },
      seocho: { name: "서초구", dongs: ["서초1동", "서초2동", "서초3동", "서초4동", "잠원동", "반포본동", "반포1동", "반포2동", "반포3동", "반포4동", "방배본동", "방배1동", "방배2동", "방배3동", "방배4동", "양재1동", "양재2동", "내곡동"] },
      gangnam: { name: "강남구", dongs: ["역삼1동", "역삼2동", "개포1동", "개포2동", "개포4동", "청담동", "삼성1동", "삼성2동", "대치1동", "대치2동", "대치4동", "신사동", "논현1동", "논현2동", "압구정동", "세곡동", "자곡동", "일원동", "수서동", "도곡1동", "도곡2동"] },
      songpa: { name: "송파구", dongs: ["잠실본동", "잠실2동", "잠실3동", "잠실4동", "잠실6동", "잠실7동", "풍납1동", "풍납2동", "거여1동", "거여2동", "마천1동", "마천2동", "방이1동", "방이2동", "오륜동", "오금동", "송파1동", "송파2동", "석촌동", "삼전동", "가락본동", "가락1동", "가락2동", "문정1동", "문정2동", "장지동", "위례동", "잠실동"] },
      gangdong: { name: "강동구", dongs: ["강일동", "상일1동", "상일2동", "명일1동", "명일2동", "고덕1동", "고덕2동", "암사1동", "암사2동", "암사3동", "천호1동", "천호2동", "천호3동", "성내1동", "성내2동", "성내3동", "둔촌1동", "둔촌2동"] },
    },
  },
  gyeonggi: {
    name: "경기도",
    districts: {
      suwon_jangan: { name: "수원시 장안구", dongs: ["파장동", "정자1동", "정자2동", "정자3동", "영화동", "송죽동", "조원1동", "조원2동", "율천동"] },
      suwon_gwonseon: { name: "수원시 권선구", dongs: ["세류1동", "세류2동", "세류3동", "권선1동", "권선2동", "곡선동", "평동", "호매실동", "서둔동", "금곡동"] },
      suwon_paldal: { name: "수원시 팔달구", dongs: ["매교동", "매산동", "고등동", "화서1동", "화서2동", "지동", "우만1동", "우만2동", "인계동"] },
      suwon_yeongtong: { name: "수원시 영통구", dongs: ["매탄1동", "매탄2동", "매탄3동", "매탄4동", "원천동", "영통1동", "영통2동", "영통3동", "망포1동", "망포2동", "광교1동", "광교2동"] },
      seongnam_sujeong: { name: "성남시 수정구", dongs: ["신흥동", "태평동", "수진동", "단대동", "산성동", "양지동", "복정동", "위례동", "신촌동", "고등동", "창곡동"] },
      seongnam_jungwon: { name: "성남시 중원구", dongs: ["성남동", "중앙동", "금광동", "은행동", "상대원동", "하대원동", "도촌동"] },
      seongnam_bundang: { name: "성남시 분당구", dongs: ["분당동", "수내동", "정자동", "서현동", "이매동", "야탑동", "금곡동", "구미동", "판교동", "삼평동", "백현동", "운중동"] },
      goyang_deogyang: { name: "고양시 덕양구", dongs: ["주교동", "원신동", "흥도동", "성사동", "효자동", "신도동", "창릉동", "능곡동", "행주동", "행신동", "화정동", "대덕동"] },
      goyang_ilsandong: { name: "고양시 일산동구", dongs: ["식사동", "중산동", "정발산동", "풍산동", "백석동", "마두동", "장항동", "고봉동"] },
      goyang_ilsanseo: { name: "고양시 일산서구", dongs: ["일산동", "탄현동", "주엽동", "대화동", "송포동", "덕이동", "가좌동"] },
      yongin_cheoin: { name: "용인시 처인구", dongs: ["포곡읍", "모현읍", "남사읍", "이동읍", "원삼면", "백암면", "양지면", "중앙동", "역북동", "삼가동", "유림동", "동부동"] },
      yongin_giheung: { name: "용인시 기흥구", dongs: ["신갈동", "영덕동", "구갈동", "상갈동", "보라동", "기흥동", "서농동", "구성동", "마북동", "동백동", "상하동", "보정동"] },
      yongin_suji: { name: "용인시 수지구", dongs: ["풍덕천동", "신봉동", "죽전동", "동천동", "상현동", "성복동"] },
      bucheon_wonmi: { name: "부천시 원미구", dongs: ["심곡동", "원미동", "소사동", "역곡동", "중동", "상동", "약대동"] },
      bucheon_sosa: { name: "부천시 소사구", dongs: ["소사본동", "심곡본동", "범박동", "괴안동", "송내동", "옥길동", "계수동"] },
      bucheon_ojeong: { name: "부천시 오정구", dongs: ["오정동", "원종동", "고강동", "삼정동", "내동", "여월동", "작동"] },
      anyang_manan: { name: "안양시 만안구", dongs: ["안양동", "석수동", "박달동"] },
      anyang_dongan: { name: "안양시 동안구", dongs: ["비산동", "관양동", "평촌동", "호계동", "범계동", "달안동", "부흥동", "귀인동"] },
      ansan_sangnok: { name: "안산시 상록구", dongs: ["일동", "이동", "사동", "본오동", "팔곡동", "양상동", "부곡동", "성포동", "월피동", "건건동", "사사동", "수암동", "장상동", "반월동"] },
      ansan_danwon: { name: "안산시 단원구", dongs: ["고잔동", "와동", "신길동", "성곡동", "원시동", "목내동", "초지동", "원곡동", "선부동", "대부동"] },
      gwangmyeong: { name: "광명시", dongs: ["광명동", "철산동", "하안동", "소하동", "노온사동", "일직동", "가학동", "옥길동"] },
      pyeongtaek: { name: "평택시", dongs: ["팽성읍", "안중읍", "포승읍", "청북읍", "진위면", "서탄면", "고덕동", "중앙동", "서정동", "송탄동", "지산동", "송북동", "신장동", "신평동", "원평동", "통복동", "비전동", "세교동", "용이동", "동삭동"] },
      dongducheon: { name: "동두천시", dongs: ["생연동", "중앙동", "보산동", "불현동", "송내동", "소요동", "상패동", "광암동"] },
      gwacheon: { name: "과천시", dongs: ["중앙동", "갈현동", "별양동", "부림동", "원문동", "문원동", "과천동", "주암동"] },
      guri: { name: "구리시", dongs: ["갈매동", "사노동", "인창동", "교문동", "수택동", "아천동", "토평동", "동구동"] },
      namyangju: { name: "남양주시", dongs: ["호평동", "평내동", "금곡동", "일패동", "이패동", "삼패동", "수석동", "다산동", "와부읍", "진접읍", "화도읍", "진건읍", "오남읍", "퇴계원읍", "별내동"] },
      osan: { name: "오산시", dongs: ["오산동", "부산동", "원동", "궐동", "청학동", "가장동", "금암동", "수청동", "은계동", "세교동", "지곶동", "서랑동", "양산동", "세마동", "초평동"] },
      siheung: { name: "시흥시", dongs: ["대야동", "신천동", "방산동", "포동", "미산동", "은행동", "안현동", "매화동", "도창동", "금이동", "과림동", "계수동", "화정동", "능곡동", "하중동", "하상동", "광석동", "물왕동", "산현동", "조남동", "논곡동", "목감동", "거모동", "군자동", "장현동", "장곡동", "월곶동", "정왕동", "배곧동"] },
      gunpo: { name: "군포시", dongs: ["당동", "당정동", "부곡동", "산본동", "금정동", "둔대동", "속달동", "대야미동", "도마교동", "재궁동", "오금동", "수리동", "궁내동", "광정동"] },
      uiwang: { name: "의왕시", dongs: ["고천동", "이동", "삼동", "왕곡동", "오전동", "학의동", "내손동", "청계동", "포일동", "월암동", "초평동"] },
      hanam: { name: "하남시", dongs: ["천현동", "하산곡동", "창우동", "배알미동", "상산곡동", "신장동", "당정동", "덕풍동", "망월동", "풍산동", "미사동", "선동", "감북동", "감일동", "감이동", "학암동", "교산동", "춘궁동", "하사창동", "상사창동", "항동", "초일동", "초이동", "광암동"] },
      paju: { name: "파주시", dongs: ["문산읍", "조리읍", "법원읍", "파주읍", "광탄면", "탄현면", "월롱면", "적성면", "파평면", "교하동", "운정동", "금촌동"] },
      icheon: { name: "이천시", dongs: ["장호원읍", "부발읍", "신둔면", "백사면", "호법면", "마장면", "대월면", "모가면", "설성면", "율면", "창전동", "증일동", "율현동", "진리동", "중리동", "관고동", "안흥동", "갈산동", "증포동", "송정동"] },
      anseong: { name: "안성시", dongs: ["공도읍", "보개면", "금광면", "서운면", "미양면", "대덕면", "양성면", "원곡면", "일죽면", "죽산면", "삼죽면", "고삼면", "안성동"] },
      gimpo: { name: "김포시", dongs: ["통진읍", "고촌읍", "양촌읍", "대곶면", "월곶면", "하성면", "김포본동", "장기본동", "사우동", "풍무동", "장기동", "구래동", "마산동", "운양동"] },
      hwaseong: { name: "화성시", dongs: ["봉담읍", "우정읍", "향남읍", "남양읍", "매송면", "비봉면", "마도면", "송산면", "서신면", "팔탄면", "장안면", "양감면", "정남면", "새솔동", "진안동", "병점동", "반월동", "기배동", "화산동", "동탄동"] },
      gwangju: { name: "광주시", dongs: ["오포읍", "초월읍", "곤지암읍", "도척면", "퇴촌면", "남종면", "남한산성면", "경안동", "쌍령동", "송정동", "탄벌동", "광남동"] },
      yangju: { name: "양주시", dongs: ["백석읍", "은현면", "남면", "광적면", "장흥면", "양주동", "회천동", "옥정동"] },
      pochon: { name: "포천시", dongs: ["소흘읍", "군내면", "내촌면", "가산면", "신북면", "창수면", "영중면", "일동면", "이동면", "영북면", "관인면", "화현면", "포천동", "선단동"] },
      yeoju: { name: "여주시", dongs: ["가남읍", "점동면", "흥천면", "금사면", "산북면", "대신면", "북내면", "강천면", "여흥동", "중앙동", "오학동"] },
      uijeongbu: { name: "의정부시", dongs: ["의정부동", "호원동", "장암동", "신곡동", "용현동", "민락동", "낙양동", "자일동", "금오동", "가능동", "녹양동", "고산동", "산곡동"] },
      yeoncheon: { name: "연천군", dongs: ["연천읍", "전곡읍", "군남면", "청산면", "백학면", "미산면", "왕징면", "신서면", "중면", "장남면"] },
      gapyeong: { name: "가평군", dongs: ["가평읍", "설악면", "청평면", "상면", "조종면", "북면"] },
      yangpyeong: { name: "양평군", dongs: ["양평읍", "강상면", "강하면", "양서면", "옥천면", "서종면", "단월면", "청운면", "양동면", "지평면", "용문면", "개군면"] },
    },
  },
  incheon: {
    name: "인천광역시",
    districts: {
      jemulpo: { name: "제물포구", dongs: ["신포동", "연안동", "신흥동", "도원동", "율목동", "동인천동", "개항동", "만석동", "화수동", "송현동", "송림동", "금창동"] },
      yeongjong: { name: "영종구", dongs: ["영종동", "영종1동", "영종2동", "운서동", "용유동", "중산동", "운남동", "운북동"] },
      michuhol: { name: "미추홀구", dongs: ["숭의동", "용현동", "학익동", "도화동", "주안동", "관교동", "문학동"] },
      yeonsu: { name: "연수구", dongs: ["옥련동", "선학동", "연수동", "청학동", "동춘동", "송도1동", "송도2동", "송도3동", "송도4동", "송도5동"] },
      namdong: { name: "남동구", dongs: ["구월동", "간석동", "만수동", "장수서창동", "서창동", "남촌도림동", "논현동", "논현고잔동"] },
      bupyeong: { name: "부평구", dongs: ["부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동"] },
      gyeyang: { name: "계양구", dongs: ["효성동", "계산동", "작전동", "작전서운동", "계양동"] },
      seohae: { name: "서구", dongs: ["검암경서동", "연희동", "청라1동", "청라2동", "청라3동", "가정동", "신현원창동", "석남동", "가좌동"] },
      geomdan: { name: "검단구", dongs: ["검단동", "불로대곡동", "원당동", "당하동", "오류왕길동", "마전동", "아라동", "금곡동"] },
      ganghwa: { name: "강화군", dongs: ["강화읍", "선원면", "불은면", "길상면", "화도면", "양도면", "내가면", "하점면", "양사면", "송해면", "교동면", "삼산면", "서도면"] },
      ongjin: { name: "옹진군", dongs: ["북도면", "연평면", "백령면", "대청면", "덕적면", "자월면", "영흥면"] },
    },
  },
};

const courseTable = [
  {
    no: "01",
    name: "릴렉스 밸런스",
    desc: "일정 뒤 굳은 흐름을 부드럽게 정돈하는 기본 케어",
    prices: [
      { time: "60분", price: "70,000원" },
      { time: "90분", price: "100,000원" },
      { time: "120분", price: "130,000원" },
    ],
  },
  {
    no: "02",
    name: "아로마 리듬",
    desc: "은은한 오일과 차분한 압을 조합한 전신 케어",
    prices: [
      { time: "60분", price: "80,000원" },
      { time: "90분", price: "110,000원" },
      { time: "120분", price: "140,000원" },
    ],
  },
  {
    no: "03",
    name: "스웨디시 플로우",
    desc: "긴 호흡과 섬세한 리듬으로 이어지는 프리미엄 코스",
    prices: [
      { time: "60분", price: "90,000원" },
      { time: "90분", price: "120,000원" },
      { time: "120분", price: "150,000원" },
    ],
  },
  {
    no: "04",
    name: "타이 스트레칭",
    desc: "가벼운 이완 동작과 압점 케어를 함께 구성한 코스",
    prices: [
      { time: "60분", price: "80,000원" },
      { time: "90분", price: "110,000원" },
      { time: "120분", price: "140,000원" },
    ],
  },
  {
    no: "05",
    name: "안심 시그니처",
    desc: "컨디션 상담 뒤 리듬과 압을 맞추는 맞춤형 집중 케어",
    prices: [
      { time: "90분", price: "140,000원" },
      { time: "120분", price: "170,000원" },
    ],
  },
];

const faqs = [
  {
    q: "어떤 정보를 먼저 준비하면 되나요?",
    a: "현재 위치의 구·시와 희망 시작 시간, 원하는 코스 길이를 알려주면 됩니다.",
  },
  {
    q: "코스는 현장에서 바꿀 수 있나요?",
    a: "가능 여부는 당일 일정과 준비 상태에 따라 달라질 수 있어 상담 단계에서 먼저 비교하는 편이 좋습니다.",
  },
  {
    q: "결제는 어떻게 진행하나요?",
    a: "선입금 없이 현장에서 안내 내용을 다시 확인한 뒤 후불로 진행합니다.",
  },
  {
    q: "늦은 시간에도 상담할 수 있나요?",
    a: "지역과 이동 상황에 따라 달라지므로 전화 상담 버튼으로 당일 가능 시간을 확인하세요.",
  },
  {
    q: "준비해야 할 물품이 있나요?",
    a: "편하게 쉴 공간과 간단한 세면 환경만 준비하면 됩니다. 필요한 기본 용품은 관리사가 지참합니다.",
  },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, district } = await params;
  const regionName = getRegionFullName(region);
  const districtName = safeDecode(district);

  const title = `${regionName.replace(/광역시|특별시|경기도/, "")} ${districtName} 출장 홈케어 마사지 | 차분하게 고르는 홈타이 코스 - 안심테라피`;
  const description = `안심테라피 ${regionName} ${districtName} 안내. 방문 전 확인할 준비사항과 가격 기준을 담았습니다. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.`;
  const canonicalUrl = `${SITE_URL}/${region}/${encodeURIComponent(districtName)}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl,
      siteName: "안심테라피",
      locale: "ko_KR",
      images: [{ url: `${SITE_URL}/assets/hayoung-og-1200x630.png`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function DistrictDetailPage({ params }: PageProps) {
  const { region, district } = await params;
  const regionName = getRegionFullName(region);
  const districtName = safeDecode(district);

  if (!regionName) notFound();

  // 🌟 현재 접속한 구/시/군에 일치하는 실제 동 리스트 추출 (없으면 기본 가상 동 제공)
  let currentDongs: string[] = [];
  const targetRegionKey = region?.toLowerCase();
  if (regionData[targetRegionKey]) {
    const matchedDistrictEntry = Object.values(regionData[targetRegionKey].districts).find(
      (d) => d.name === districtName
    );
    if (matchedDistrictEntry) {
      currentDongs = matchedDistrictEntry.dongs;
    }
  }
  if (currentDongs.length === 0) {
    currentDongs = [`${districtName}1동`, `${districtName}2동`, `${districtName}중앙동`, `${districtName}역세권`];
  }

  const currentUrl = `${SITE_URL}/${region}/${encodeURIComponent(districtName)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${currentUrl}/#webpage`,
        url: currentUrl,
        name: `${regionName} ${districtName} 출장 홈케어 마사지 | 차분하게 고르는 홈타이 코스 - 안심테라피`,
        description: `안심테라피 ${regionName} ${districtName} 안내. 방문 전 확인할 준비사항과 가격 기준을 담았습니다.`,
        about: [`${regionName} ${districtName}`, "출장 홈케어 마사지", "홈타이", "아로마", "스웨디시"],
      },
      {
        "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
        "@id": `${currentUrl}/#business`,
        name: `안심테라피 ${districtName}점`,
        url: currentUrl,
        telephone: PHONE_NUMBER,
        priceRange: "70,000원~170,000원",
        areaServed: { "@type": "AdministrativeArea", name: `${regionName} ${districtName}` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${districtName} 출장 케어 5코스 14선택지`,
          itemListElement: courseTable.flatMap((course) =>
            course.prices.map((p) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: `${course.name} (${p.time})`, description: course.desc },
              price: p.price.replace(/[^0-9]/g, ""),
              priceCurrency: "KRW",
              availability: "https://schema.org/InStock",
            }))
          ),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${currentUrl}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans selection:bg-[#66fcf1] selection:text-black pb-28">
      {/* 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#66fcf1] text-[#0b0c10] flex items-center justify-center font-black text-sm">안</span>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white">안심테라피</span>
              <span className="text-[9px] text-[#45a29e] tracking-tight">ANSIM THERAPY DIRECTORY</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
            <Link href="/" className="hover:text-[#66fcf1]">홈</Link>
            <Link href="/seoul" className="hover:text-[#66fcf1]">서울</Link>
            <Link href="/incheon" className="hover:text-[#66fcf1]">인천</Link>
            <Link href="/gyeonggi" className="hover:text-[#66fcf1]">경기</Link>
            <a href="#courses" className="hover:text-[#66fcf1]">코스·가격</a>
            <a href="#guide" className="hover:text-[#66fcf1]">이용 안내</a>
          </nav>
          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(102,252,241,0.25)] flex items-center gap-1.5"
          >
            <span>☎</span> 전화 상담
          </a>
        </div>
      </header>

      {/* 본문 레이아웃 (사이드바 + 메인 콘텐츠) */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#12161f] border border-white/10 rounded-2xl p-5 space-y-4 text-xs">
              <h2 className="text-sm font-black text-white border-b border-white/10 pb-2">카테고리</h2>
              <details open className="space-y-1">
                <summary className="font-bold text-[#66fcf1] cursor-pointer">지역별 안내</summary>
                <div className="pl-3 pt-2 flex flex-col gap-1.5 text-gray-400">
                  <Link href="/seoul" className="hover:text-white">서울</Link>
                  <Link href="/incheon" className="hover:text-white">인천</Link>
                  <Link href="/gyeonggi" className="hover:text-white">경기</Link>
                </div>
              </details>
              <details open className="space-y-1 pt-2">
                <summary className="font-bold text-[#66fcf1] cursor-pointer">관리 방식</summary>
                <div className="pl-3 pt-2 flex flex-col gap-1.5 text-gray-400">
                  <a href="#courses" className="hover:text-white">릴렉스 밸런스</a>
                  <a href="#courses" className="hover:text-white">아로마 리듬</a>
                  <a href="#courses" className="hover:text-white">스웨디시 플로우</a>
                  <a href="#courses" className="hover:text-white">타이 스트레칭</a>
                  <a href="#courses" className="hover:text-white">안심 시그니처</a>
                </div>
              </details>
            </div>

            <div className="bg-gradient-to-b from-[#1f2833] to-[#141923] border border-white/10 rounded-2xl p-5 space-y-2 text-xs">
              <h3 className="text-sm font-bold text-white">안심테라피 안내</h3>
              <p className="text-gray-300 leading-relaxed">
                {regionName} {districtName} 일정과 희망 코스를 준비한 뒤 전화 상담 버튼을 눌러 주세요.
              </p>
              <span className="inline-block text-[#66fcf1] font-bold pt-1">매일 24시간 상담 가능</span>
            </div>

            <div className="bg-[#141923] border border-[#66fcf1]/30 rounded-2xl p-5 space-y-1 text-xs">
              <strong className="text-[#66fcf1] font-black block">선입금 없이</strong>
              <strong className="text-white block text-sm">현장 확인 후 이용</strong>
              <p className="text-gray-400 text-[11px] pt-1">코스와 시간은 상담 시 다시 확인합니다.</p>
            </div>
          </aside>

          {/* 메인 상세 콘텐츠 */}
          <article className="lg:col-span-3 space-y-10">
            {/* 타이틀 및 히어로 */}
            <div className="bg-[#141923] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#66fcf1]">
                {regionName} · {districtName}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 출장 홈케어 마사지 코스 안내
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                안심테라피 {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 안내. 방문 전 확인할 준비사항과 가격 기준을 담았습니다.
                스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.
              </p>
            </div>

            {/* 내부 탭 네비게이션 */}
            <nav className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#info" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">업체정보</a>
              <a href="#courses" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">코스·가격</a>
              <a href="#guide" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">상세안내</a>
              <a href="#regions" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">지역안내</a>
            </nav>

            {/* 정보 그리드 */}
            <section id="info" className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">안내 지역</span>
                <strong className="text-white text-sm">{regionName.replace(/광역시|특별시|경기도/, "")} {districtName}</strong>
              </div>
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">상담 방식</span>
                <strong className="text-white text-sm">전화 상담</strong>
              </div>
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">결제 기준</span>
                <strong className="text-white text-sm">현장 후불</strong>
              </div>
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">이용 시간</span>
                <strong className="text-white text-sm">60 · 90 · 120분</strong>
              </div>
            </section>

            {/* 5코스 14선택지 요금표 */}
            <section id="courses" className="space-y-6">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">COURSE & PRICE</span>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 케어 코스·가격
                </h2>
                <p className="text-xs text-gray-400 mt-1">당일 컨디션과 원하는 시간을 먼저 알려주면 상담이 한결 빠릅니다.</p>
              </div>

              <div className="space-y-4">
                {courseTable.map((course) => (
                  <div key={course.no} className="bg-[#141923] border border-white/10 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#66fcf1] font-black">{course.no}</span>
                        <h3 className="text-base sm:text-lg font-black text-white">{course.name}</h3>
                      </div>
                      <span className="text-[11px] text-gray-400">100% 현장 후불</span>
                    </div>
                    <p className="text-xs text-gray-300">{course.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {course.prices.map((p, idx) => (
                        <div key={idx} className="bg-black/50 border border-white/5 p-3 rounded-xl flex items-center justify-between">
                          <span className="text-xs text-gray-400 font-bold">{p.time}</span>
                          <strong className="text-xs sm:text-sm text-[#66fcf1] font-black">{p.price}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 상세 안내 아티클 */}
            <section className="article-copy bg-[#141923] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-300">
              <h2 className="text-lg font-black text-white">
                {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 출장 케어 마사지 이용 흐름
              </h2>
              <p>
                {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 일정은 현재 위치와 희망 시작 시간을 기준으로 먼저 확인합니다. 이동 가능 여부가 정리되면 원하는 관리 방식과 집중 부위를 차례로 비교합니다.
              </p>
              <h3 className="text-base font-bold text-white pt-2">코스 선택 기준</h3>
              <p>
                가볍게 몸을 풀고 싶다면 릴렉스 밸런스, 오일 리듬을 선호한다면 아로마와 스웨디시, 유연한 이완을 원한다면 타이 스트레칭을 살펴보세요. 무리한 표현보다 그날의 컨디션을 구체적으로 설명하는 편이 알맞습니다.
              </p>
              <h3 className="text-base font-bold text-white pt-2">상담 전 준비사항</h3>
              <p>
                주소 전체를 페이지에 남길 필요는 없습니다. 상담이 연결되면 지역과 건물 유형, 희망 시간, 코스 길이를 확인합니다. 실제 가능 여부와 비용은 현장에서 다시 확인합니다.
              </p>
            </section>

            {/* 🌟 동별 세부 제휴업체 디렉토리 아코디언 (실제 동 데이터 연동) */}
            <section id="regions" className="bg-[#12161f] border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-black text-[#66fcf1] uppercase tracking-widest">REGION DIRECTORY</span>
                <h2 className="text-lg sm:text-xl font-black text-white mt-1">
                  {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 세부 지역 제휴업체
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">지역을 선택하면 해당 제휴업체 안내를 확인하실 수 있습니다.</p>
              </div>

              <div className="space-y-3">
                {currentDongs.map((dongName, idx) => (
                  <details key={idx} className="bg-[#1a212d] border border-white/5 rounded-2xl p-4 group">
                    <summary className="text-xs sm:text-sm font-bold text-white cursor-pointer list-none flex items-center justify-between">
                      <span>{regionName.replace(/광역시|특별시|경기도/, "")} {districtName} {dongName}</span>
                      <span className="text-[11px] text-[#66fcf1]">제휴업체 5곳</span>
                    </summary>
                    <div className="pt-3 mt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"].map((partner, pIdx) => {
                        const dongLink = `/${region}/${encodeURIComponent(districtName)}/${encodeURIComponent(dongName)}`;
                        return (
                          <Link
                            key={pIdx}
                            href={dongLink}
                            className="bg-black/40 border border-white/5 hover:border-[#66fcf1]/40 p-2.5 rounded-xl text-xs text-gray-300 flex items-center justify-between transition-all"
                          >
                            <span>{regionName.replace(/광역시|특별시|경기도/, "")} {districtName} {dongName} 출장 {partner}</span>
                            <span className="text-[#66fcf1] font-bold text-[11px] bg-[#66fcf1]/10 px-2 py-1 rounded-lg">동별보기</span>
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* FAQ 아코디언 */}
            <section id="guide" className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">QUICK GUIDE</span>
                <h2 className="text-lg sm:text-xl font-black text-white mt-1">
                  {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 이용 전 자주 묻는 질문
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="bg-[#141923] border border-white/10 rounded-2xl p-4 group">
                    <summary className="text-xs sm:text-sm font-bold text-white cursor-pointer list-none flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-[#66fcf1] font-black">0{idx + 1}</span>
                        {faq.q}
                      </span>
                      <span className="text-[#66fcf1] font-black text-lg transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="text-xs text-gray-400 leading-relaxed pt-3 mt-3 border-t border-white/5 pl-6">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-[#07080a] border-t border-white/10 py-10 text-center text-xs text-gray-500 mt-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
            <span>서울·인천·경기 지역별 출장 케어 마사지 가이드</span>
            <span className="hidden sm:inline">•</span>
            <span>선입금 0원 100% 현장 후불 정찰제</span>
          </div>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; ANSIM THERAPY ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* 모바일 하단 플로팅 전화 상담 바 */}
      <aside className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b0c10]/95 border-t border-white/10 p-3 shadow-2xl backdrop-blur-md md:hidden">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">{regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 안심케어</div>
            <div className="text-[10px] text-[#66fcf1]">선입금 없는 100% 현장 후불</div>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-5 py-2.5 rounded-xl shadow-md active:scale-95 transition-transform shrink-0 flex items-center gap-1.5"
          >
            <span>☎</span> 전화 상담
          </a>
        </div>
      </aside>
    </div>
  );
}