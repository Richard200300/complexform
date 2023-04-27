import React from "react";

function Total({ selPlan, formData, togglemonth }) {
  if (
    selPlan === 0 &&
    togglemonth &&
    formData.onlineService &&
    formData.largerService &&
    formData.customizableProfile
  ) {
    formData.total =
      formData.arcadeMo + formData.osMo + formData.lsMo + formData.cpMo;
  } else if (
    selPlan === 0 &&
    togglemonth &&
    formData.onlineService &&
    formData.largerService
  ) {
    formData.total = formData.arcadeMo + formData.osMo + formData.lsMo;
  } else if (
    selPlan === 0 &&
    togglemonth &&
    formData.onlineService &&
    formData.customizableProfile
  ) {
    formData.total = formData.arcadeMo + formData.osMo + formData.cpMo;
  } else if (
    selPlan === 0 &&
    togglemonth &&
    formData.largerService &&
    formData.customizableProfile
  ) {
    formData.total = formData.arcadeMo + formData.lsMo + formData.cpMo;
  } else if (selPlan === 0 && togglemonth && formData.onlineService) {
    formData.total = formData.arcadeMo + formData.osMo;
  } else if (selPlan === 0 && togglemonth && formData.largerService) {
    formData.total = formData.arcadeMo + formData.lsMo;
  } else if (selPlan === 0 && togglemonth && formData.customizableProfile
    ) {
    formData.total = formData.arcadeMo + formData.cpMo;
  } else if (selPlan === 0 && togglemonth 
    ) {
    formData.total = formData.arcadeMo;
  } else if (
    selPlan === 0 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.largerServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total =
      formData.arcadeyr + formData.osyr + formData.lsyr + formData.cpyr;
  } else if (
    selPlan === 0 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.largerServiceyr
  ) {
    formData.total = formData.arcadeyr + formData.osyr + formData.lsyr;
  } else if (
    selPlan === 0 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total = formData.arcadeyr + formData.osyr + formData.cpyr;
  } else if (
    selPlan === 0 &&
    !togglemonth &&
    formData.largerServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total = formData.arcadeyr + formData.lsyr + formData.cpyr;
  } else if (selPlan === 0 && !togglemonth && formData.onlineServiceyr) {
    formData.total = formData.arcadeyr + formData.osyr;
  } else if (selPlan === 0 && !togglemonth && formData.largerServiceyr) {
    formData.total = formData.arcadeyr + formData.lsyr;
  } else if (selPlan === 0 && !togglemonth && formData.customizableProfileyr
    ) {
    formData.total = formData.arcadeyr + formData.cpyr;
  } else if (selPlan === 0 && !togglemonth 
    ) {
    formData.total = formData.arcadeyr;
  } else if (
    selPlan === 1 &&
    togglemonth &&
    formData.onlineService &&
    formData.largerService &&
    formData.customizableProfile
  ) {
    formData.total =
      formData.advancedMo + formData.osMo + formData.lsMo + formData.cpMo;
  } else if (
    selPlan === 1 &&
    togglemonth &&
    formData.onlineService &&
    formData.largerService
  ) {
    formData.total = formData.advancedMo + formData.osMo + formData.lsMo;
  } else if (
    selPlan === 1 &&
    togglemonth &&
    formData.onlineService &&
    formData.customizableProfile
  ) {
    formData.total = formData.advancedMo + formData.osMo + formData.cpMo;
  } else if (
    selPlan === 1 &&
    togglemonth &&
    formData.largerService &&
    formData.customizableProfile
  ) {
    formData.total = formData.advancedMo + formData.lsMo + formData.cpMo;
  } else if (selPlan === 1 && togglemonth && formData.onlineService) {
    formData.total = formData.advancedMo + formData.osMo;
  } else if (selPlan === 1 && togglemonth && formData.largerService) {
    formData.total = formData.advancedMo + formData.lsMo;
  } else if (selPlan === 1 && togglemonth && formData.customizableProfile
    ) {
    formData.total = formData.advancedMo + formData.cpMo;
  } else if (selPlan === 1 && togglemonth 
    ) {
    formData.total = formData.advancedMo;
  } else if (
    selPlan === 1 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.largerServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total =
      formData.advancedyr + formData.osyr + formData.lsyr + formData.cpyr;
  } else if (
    selPlan === 1 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.largerServiceyr
  ) {
    formData.total = formData.advancedyr + formData.osyr + formData.lsyr;
  } else if (
    selPlan === 1 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total = formData.advancedyr + formData.osyr + formData.cpyr;
  } else if (
    selPlan === 1 &&
    !togglemonth &&
    formData.largerServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total = formData.advancedyr + formData.lsyr + formData.cpyr;
  } else if (selPlan === 1 && !togglemonth && formData.onlineServiceyr) {
    formData.total = formData.advancedyr + formData.osyr;
  } else if (selPlan === 1 && !togglemonth && formData.largerServiceyr) {
    formData.total = formData.advancedyr + formData.lsyr;
  } else if (selPlan === 1 && !togglemonth && formData.customizableProfileyr
    ) {
    formData.total = formData.advancedyr + formData.cpyr;
  } else if (selPlan === 1 && !togglemonth 
    ) {
    formData.total = formData.advancedyr;
  } else if (
    selPlan === 2 &&
    togglemonth &&
    formData.onlineService &&
    formData.largerService &&
    formData.customizableProfile
  ) {
    formData.total =
      formData.proMo + formData.osMo + formData.lsMo + formData.cpMo;
  } else if (
    selPlan === 2 &&
    togglemonth &&
    formData.onlineService &&
    formData.largerService
  ) {
    formData.total = formData.proMo + formData.osMo + formData.lsMo;
  } else if (
    selPlan === 2 &&
    togglemonth &&
    formData.onlineService &&
    formData.customizableProfile
  ) {
    formData.total = formData.proMo + formData.osMo + formData.cpMo;
  } else if (
    selPlan === 2 &&
    togglemonth &&
    formData.largerService &&
    formData.customizableProfile
  ) {
    formData.total = formData.proMo + formData.lsMo + formData.cpMo;
  } else if (selPlan === 2 && togglemonth && formData.onlineService) {
    formData.total = formData.proMo + formData.osMo;
  } else if (selPlan === 2 && togglemonth && formData.largerService) {
    formData.total = formData.proMo + formData.lsMo;
  } else if (selPlan === 2 && togglemonth && formData.customizableProfile
    ) {
    formData.total = formData.proMo + formData.cpMo;
  } else if (selPlan === 2 && togglemonth 
    ) {
    formData.total = formData.proMo;
  } else if (
    selPlan === 2 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.largerServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total =
      formData.proyr + formData.osyr + formData.lsyr + formData.cpyr;
  } else if (
    selPlan === 2 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.largerServiceyr
  ) {
    formData.total = formData.proyr + formData.osyr + formData.lsyr;
  } else if (
    selPlan === 2 &&
    !togglemonth &&
    formData.onlineServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total = formData.proyr + formData.osyr + formData.cpyr;
  } else if (
    selPlan === 2 &&
    !togglemonth &&
    formData.largerServiceyr &&
    formData.customizableProfileyr
  ) {
    formData.total = formData.proyr + formData.lsyr + formData.cpyr;
  } else if (selPlan === 2 && !togglemonth && formData.onlineServiceyr) {
    formData.total = formData.proyr + formData.osyr;
  } else if (selPlan === 2 && !togglemonth && formData.largerServiceyr) {
    formData.total = formData.proyr + formData.lsyr;
  } else if (selPlan === 2 && !togglemonth && formData.customizableProfileyr
    ) {
    formData.total = formData.proyr + formData.cpyr;
  } else if (selPlan === 2 && !togglemonth 
    ) {
    formData.total = formData.proyr;
  }
  return <div>{formData.total}</div>;
}

export default Total;
