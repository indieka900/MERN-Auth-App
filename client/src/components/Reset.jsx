import styles from "../styles/username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/validate";

export default function Reset() {
  const formik = useFormik({
    initialValues: { password: "", confirm_password: "" },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{width: "50%"}}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Reset</h4>
            <span className="py-2 text-xl w-2/3 text-center text-gray-500">
              Enter new password
            </span>
          </div>
          <form className="py-20" onSubmit={formik.handleSubmit}>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                {...formik.getFieldProps("password")}
                type="password"
                placeholder="Password"
              />
              <input
                className={styles.textbox}
                {...formik.getFieldProps("confirm_password")}
                type="password"
                placeholder="confirm password"
              />
              <button className={styles.btn} type="submit">
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
