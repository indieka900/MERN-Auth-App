import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import styles from "../styles/username.module.css";

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
            <div className="title flex flex-col items-center">
                <h4 className="text-4xl font-bold">Hello Again!</h4>
                <span className="py-2 text-xl w-2/3 text-center text-gray-500">
                Explore More by connecting with us
                </span>
            </div>
            <form className="py-1">
                <div className="profile flex justify-center py-4">
                <img
                    src={profile}
                    className={styles.profile_img}
                    alt="avatar"
                />
                </div>

                <div className="textbox flex flex-col items-center gap-6">
                <input
                    className={styles.textbox}
                    type="text"
                    name=""
                    id=""
                    placeholder="Username"
                />
                <button className={styles.btn} type="submit">
                    Let&apos;s Go
                </button>
                </div>

                <div className="text-center py-4">
                <span className="text-gray-500">
                    Not a Member
                    <Link className="text-red-500" to="/register">
                    
                    Register Now
                    </Link>
                </span>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
