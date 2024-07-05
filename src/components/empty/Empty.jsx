import React, { memo } from 'react'
import "./empty.scss"
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import empty from "../../assets/images/empty.png"

const Empty = () => {
    const navigate = useNavigate()

  return (
    <div className='empty__cart'>
            <img src={empty} alt="" />
            <h1 className="empty__title">Your page is empty</h1>
            <button onClick={() => navigate("/")} className='back__home'>
                <FaArrowLeftLong />
                Back to Home
            </button>
        </div>
  )
}

export default memo(Empty)