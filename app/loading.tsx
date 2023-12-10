import { motion } from "framer-motion";
import LoadingCSS from "./loading.module.css";

/**
 * Loading animation which happens between pages transitions 
 */
export default function Loading() {
  return (
    <>
      <div className={LoadingCSS.wrapper}>
        <div>
          <svg
            style={{
              height: "40%",
            }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={LoadingCSS.spinner_ngNb}
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="translate(12, 12) scale(0)"
            />
            <path
              className={
                LoadingCSS.spinner_ngNb + " " + LoadingCSS.spinner_6TBP
              }
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="translate(12, 12) scale(0)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
