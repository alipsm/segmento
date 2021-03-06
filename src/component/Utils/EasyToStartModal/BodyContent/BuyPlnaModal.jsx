import React, { useEffect, useState } from 'react'
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthInput from '../../../Auth/authInput/AuthInput';
import DiscountTagValue from '../../buyPlanSection_UTILS/DiscountTagValue';

export default function BuyPlnaModal() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllPlanData());
  }, [])

  // const [plan, setPlan] = useState("");

  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");
  const [lastSelectedDiscountInput, setLastSelectedDiscountInput] = useState("");

  const { canRequest } = useSelector((state) => state.loadingState);
  const { discount,discountStatus,allPackageData } = useSelector(state => state.planState);

  const handleShowArrowDiscount = (text, arrowTarget) => {
    // 
    if (discountInputGold != "" && arrowTarget != "gold") { setDiscountInputGold(""); }
    if (discountInputBronze != "" && arrowTarget != "bronze") { setDiscountInputBronze(""); }
    if (discountInputSilver != "" && arrowTarget != "silver") { setDiscountInputSilver(""); }
    if (discountInputDiamond != "" && arrowTarget != "diamond") { setDiscountInputDiamond(""); }
    switch (arrowTarget) {
      case "gold":
        if (discountInputGold != text) {
          setLastSelectedDiscountInput("gold");
          setDiscountInputGold(text);
        }
        break;
      case "bronze":
        if (discountInputBronze != text) {
          setLastSelectedDiscountInput("bronze");
          setDiscountInputBronze(text);
        }
        break;
      case "silver":
        if (discountInputSilver != text) {
          setLastSelectedDiscountInput("silver");
          setDiscountInputSilver(text);
        }
        break;
      case "diamond":
        if (discountInputDiamond != text) {
          setLastSelectedDiscountInput("diamond");
          setDiscountInputDiamond(text);
        }
        break;

      default:
        break;
    }
  }
  const [plan, setPlan] = useState({ uuid: "", type: "" });
  return (
    <body className='plans_body_container'>



      {/* <div className='plan_cards_container mt-7'>
        <div className='bronze plan_card'>
          <span className='title'>??????????</span>
          <hr />
          <div className='plan'>
            {allPackageData.map(item => {
              
              if (item.type_text == "??????????") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="bronze"?<span className=' absolute bottom-12 line-through w-full text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[1].price.toString().substring(0,allPackageData[1].price.toString().length-3))-discountStatus.value+" ???????? ?????????? ????????????":""}</span>:null}
            <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[1].price.toString().substring(0,allPackageData[1].price.toString().length-3)+" ???????? ?????????? ????????????":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" ???? ??????????  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"bronze"}
              disabled={discount != "" ? true : false}
              classes={discountInputBronze != "" & discount != "" ? "border-b-[2px] border-b-[#10CCAE]" : ""}
              errorTextId={lastSelectedDiscountInput == "bronze" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze,"bronze"))}></button>
            
          </div>
        </div>
        <div className='silver plan_card'>
          <span className='title'>???????? ????</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              
              if (item.type_text == "???????? ????") {
                if (item.title!="14 ?????? ????????????") {
                  
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
                }
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="silver"?<span className=' absolute bottom-12 line-through w-full text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[5].price.toString().substring(0,allPackageData[5].price.toString().length-3))-discountStatus.value+" ???????? ?????????? ????????????":""}</span>:null}

            <p style={plan.substring(0, 1) == "s" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[5].price.toString().substring(0,allPackageData[5].price.toString().length-3)+" ???????? ?????????? ????????????":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" ???? ??????????  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"silver"}
              disabled={discount != "" ? true : false}
              errorTextId={lastSelectedDiscountInput == "silver" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputSilver != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver,"silver"))}></button>

          </div>
        </div>
        <div className='gold plan_card'>
          <span className='title'>??????????</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              
              if (item.type_text == "??????????") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="gold"?<span className=' absolute bottom-12 w-full line-through text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[9].price.toString().substring(0,allPackageData[9].price.toString().length-3))-discountStatus.value+" ???????? ?????????? ????????????":""}</span>:null}
            <p style={plan.substring(0, 1) == "g" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[9].price.toString().substring(0,allPackageData[9].price.toString().length-3)+" ???????? ?????????? ????????????":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" ???? ??????????  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"gold"}
              disabled={discount != "" ? true : false}
              errorTextId={lastSelectedDiscountInput == "gold" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputGold != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputGold,"gold"))}></button>
          </div>
        </div>
        <div className='diamond plan_card'>

          <span className='title'>????????????</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              
              if (item.type_text == "????????????") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="diamond"?<span className=' absolute bottom-12 w-full line-through text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[13].price.toString().substring(0,allPackageData[13].price.toString().length-3))-discountStatus.value+" ???????? ?????????? ????????????":""}</span>:null}
            <p style={plan.substring(0, 1) == "d" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[13].price.toString().substring(0,allPackageData[13].price.toString().length-3)+" ???????? ?????????? ????????????":""}</p>
          </div>
          <div className='input_apply_token_container'>
            <AuthInput
              textLabelInput=" ???? ??????????  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
              handleArrowPlan={handleShowArrowDiscount}
              targePlanArrow={"diamond"}
              disabled={discount != "" ? true : false}
              errorTextId={lastSelectedDiscountInput == "diamond" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputDiamond != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond,"diamond"))}></button>
          </div>
        </div>

      </div> */}




<div className='plan_cards_container mt-7'>
          <div className='bronze plan_card'>
            <span className='title'>??????????</span>
            <hr />
            <div className='plan'>
              {allPackageData.map(item => {
                // 
                if (item.type_text == "??????????") {
                  return (
                    <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "bronze" }); dispatch(setPackageUuid(item.uuid)) }}>
                      <div>
                        <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                        <p>{item.title}</p>
                      </div>
                      <span className='off_price'>{item.default_discount_text}</span>
                    </div>)
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"bronze"}
                price={allPackageData[1].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" ???? ??????????  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"bronze"}
                disabled={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "bronze" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze, "bronze"))}></button>
            </div>
          </div>


          <div className='silver plan_card'>
            <span className='title'>???????? ????</span>
            <hr />
            <div className='plan'>
              {allPackageData.map(item => {
                // 
                if (item.type_text == "???????? ????") {
                  if (item.title != "14 ?????? ????????????") {
                    return (
                      <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "silver" }); dispatch(setPackageUuid(item.uuid)) }}>
                        <div>
                          <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                          <p>{item.title}</p>
                        </div>
                        <span className='off_price'>{item.default_discount_text}</span>
                      </div>)
                  }
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"silver"}
                price={allPackageData[5].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" ???? ??????????  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"silver"}
                disabled={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "silver" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputSilver != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver, "silver"))}></button>
            </div>
          </div>
          <div className='gold plan_card'>
            <span className='title'>??????????</span>
            <hr />
            <div className='plan'>
              {allPackageData.map(item => {

                if (item.type_text == "??????????") {
                  return (
                    <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "gold" }); dispatch(setPackageUuid(item.uuid)) }}>
                      <div>
                        <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                        <p>{item.title}</p>
                      </div>
                      <span className='off_price'>{item.default_discount_text}</span>
                    </div>)
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"gold"}
                price={allPackageData[9].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" ???? ??????????  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"gold"}
                disabled={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "gold" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputGold != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputGold, "gold"))}></button>
            </div>
          </div>
          <div className='diamond plan_card'>

            <span className='title'>????????????</span>
            <hr />
            <div className='plan'>
              {allPackageData.map(item => {

                if (item.type_text == "????????????") {
                  return (
                    <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "diamond" }); dispatch(setPackageUuid(item.uuid)) }}>
                      <div>
                        <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                        <p>{item.title}</p>
                      </div>
                      <span className='off_price'>{item.default_discount_text}</span>
                    </div>)
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"diamond"}
                price={allPackageData[13].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" ???? ??????????  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"diamond"}
                disabled={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "diamond" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputDiamond != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond, "diamond"))}></button>
            </div>
          </div>
        </div>








      <div className='container_plan_message mt-5 border rounded-lg'>
        <img src="/img/modal/footer/planInfoMessage.svg" className='inline-block mr-3' alt="" />
        <span className='py-2.5 mr-3 inline-block text-sm '>???? ???????? ???????????? 12 ???????? ?????????? ?????? ?????? ???????? 10 ?????? ???? ???????????? ?????????????? 2 ?????? ?????????? ???????????? ??????????</span>
      </div>
    </body>

  )
}