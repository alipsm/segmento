export const rankTrakingReducer = (
  state = {
    workSpacePeriodData: [],
    chart: { type: "", data: [] },
    charts:[{id:"",type:"",data:[]}],
    bigChartData: [], //[{labels:[],label:"",data:[]}]
    bigChartDataInkeyWordsSection: {}, //[{labels:[],label:"",data:[]}]
    keyWordsData: [],
    keyWordsSelectedPeriosData:[],
    keyWordsSelected:[],
    rankTrakingForceUpdate:1
  },
  action
) => {
  switch (action.type) {
    case "INIT_WORK_SPACE_PERIOD_DATA":
      return { ...action.payload };
      case "SET_DATA_FROM_BIG_CHART":
      // const payload=action.payload.rankTrakingForceUpdate++;
      return { ...action.payload };
    case "INIT_KEY_WORDS_DATA":
      return { ...action.payload };
      case "GET_KEY_WORDS_PERIOD_DATA":
        return { ...action.payload };
        case "TOOGLE_SELECTING_KEY_WOURDS_TABEL":
          return { ...action.payload };
          case "SET_CHARTS_DATA_IN_STATE":
            return { ...action.payload };
          
    case "RESET_ALL_STATE":
      return {
        // workSpacePeriodData: [],

        workSpacePeriodData: [],
        chart: { type: "", data: [] },
        charts:[{id:"",type:"",data:[]}],
        bigChartData: [], //[{labels:[],label:"",data:[]}]
        bigChartDataInkeyWordsSection: {}, //[{labels:[],label:"",data:[]}]
        keyWordsData: [],
        keyWordsSelectedPeriosData:[],
        keyWordsSelected:[],
        rankTrakingForceUpdate:1
      };
    case "RESET_PLAN_STATE":
      return {
        // workSpacePeriodData: [],

        workSpacePeriodData: [],
        chart: { type: "", data: [] },
        charts:[{id:"",type:"",data:[]}],
        bigChartData: [], //[{labels:[],label:"",data:[]}]
        bigChartDataInkeyWordsSection: {}, //[{labels:[],label:"",data:[]}]
        keyWordsData: [],
        keyWordsSelectedPeriosData:[],
        keyWordsSelected:[],
        rankTrakingForceUpdate:1
      };

    // case "RESET_STATE":
    //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

    default:
      return state;
  }
};
