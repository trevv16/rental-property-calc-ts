import {
  IncomeInput,
  InfoInput,
  LoanInput,
  OwnershipInput,
  PurchaseInput,
  UtilityInput,
} from "../../utils/types";
import {
  ReviewInfo,
  ReviewPurchase,
  ReviewLoan,
  ReviewIncome,
  ReviewOwnership,
  ReviewUtility,
} from "../index";
import Divider from "../calculator/Divider";

type ReviewProps = {
  info: InfoInput;
  purchase: PurchaseInput;
  loan: LoanInput;
  ownership: OwnershipInput;
  income: IncomeInput;
  utility: UtilityInput;
};

export default function Review({
  info,
  purchase,
  loan,
  ownership,
  income,
  utility,
}: ReviewProps) {
  return (
    <>
      {info.complete && (
        <>
          <ReviewInfo info={info} />
          <Divider />
        </>
      )}

      {purchase.complete && (
        <>
          <ReviewPurchase purchase={purchase} />
          <Divider />
        </>
      )}

      {loan.complete && (
        <>
          <ReviewLoan loan={loan} />
          <Divider />
        </>
      )}

      {income.complete && (
        <>
          <ReviewIncome income={income} />
          <Divider />
        </>
      )}

      {ownership.complete && (
        <>
          <ReviewOwnership ownership={ownership} />
          <Divider />
        </>
      )}

      {utility.complete && <ReviewUtility utility={utility} />}
    </>
  );
}
