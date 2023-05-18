import React from 'react'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createClientCheckout, fetchDiscountCodeData,discountCodeApplied,discountStatusMsg } from '../actions/cartAction'
const ApplyDiscount = () => {
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = useState('');
  const cartData = useSelector(state => state?.getCartDataReducer?.cartData)
  const graphQlClient = useSelector((state) => state?.discountCodeApply?.graphQlClient);
  const checkout = useSelector((state) => state?.discountCodeApply?.checkout);
  const graphQlData = useSelector((state) => state?.discountCodeApply);
  const fetchDiscountData = useSelector((state) => state?.discountCodeApply?.fetchDiscount);
  const isDiscountApplied = useSelector((state) => state?.discountCodeApply?.discountCodeApplied);
  const isDiscountApplySuccess = useSelector((state) => state?.discountCodeApply?.discountCodeApplySuccess);
  const checkingDiscountProcess = useSelector((state) => state?.discountCodeApply?.checkingDiscountProcess);
  const isDiscountStatusMsg = useSelector((state) => state?.discountCodeApply?.checkDiscountStatusMsg);
  const options = [
    { value: '', label: 'PLease select offer' },
    { value: 'GET5', label: '5% off on Minimum purchase amount (₹599) - Use Code - GET5' },
    { value: 'GET10', label: '10% off on T-shirt products -  USE CODE - GET10' }
  ]

  const fetchCartData = () => {
    if (!cartData) return;
    if (!graphQlClient) return;

    let allLineItems = cartData?.items?.map((resp) => {
      let var_id_url = "gid://shopify/ProductVariant/" + resp?.variant_id;
      let properties = [];
      let current_prop = resp?.properties;
      for (let key in current_prop) {
        let obj = {};
        obj.key = key;
        obj.value = current_prop[key].toString();
        properties.push(obj);
      }
      return {
        variantId: btoa(var_id_url),
        quantity: resp?.quantity,
        customAttributes: properties
      };
    });
    // Step 2
    dispatch(createClientCheckout({
      client: graphQlClient,
      allLineItems: allLineItems
    }))
  }

  useEffect(() => {
    fetchCartData();
  }, [cartData])

  const discountOptionChange = (e) => {
    setDiscountCode(e.value);
  }

  const applyCouponClickEvent = (e) => {
    dispatch(discountCodeApplied(true))
    dispatch(fetchDiscountCodeData({
      checkout: checkout,
      client: graphQlClient,
      discCode: discountCode
    }));
  }

  if (!cartData) return null;
  if (!graphQlClient) return null;
  if (!graphQlData) return null;
  // console.log("cartData",cartData);
  // console.log("graphQlData",graphQlData);
  // console.log("total_price", total_price);
  // console.log("isDiscountApplied",isDiscountApplied);

  useEffect(() => {
    if (discountCode.length < 1) {
      dispatch(discountStatusMsg(''))
    }
  }, [isDiscountApplied])
  return (
    <div className="sidecart-discount-wrapper">
      <Select options={options} onChange={(e) => discountOptionChange(e)} />
      <div className={`discount-input-wrapper`}>
        <input className="discount-input" type="text" placeholder="Have a Discount code ?" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
        <button className={`apply-discount-btn`} onClick={(e) => applyCouponClickEvent(e)}> {checkingDiscountProcess ? 'Loading...' : 'Apply'} </button>
      </div>

      { isDiscountApplied && !checkingDiscountProcess &&
      <div className={`${isDiscountApplySuccess ? 'discount-success-msg' : 'discount-error-msg'}`}>{isDiscountStatusMsg}</div>}
    </div>
  )
}

export default ApplyDiscount