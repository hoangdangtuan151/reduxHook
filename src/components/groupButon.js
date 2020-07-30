import React from "react";
import { setTechnology, deleteTechnology } from "../action"
import { useDispatch } from "react-redux";



const ButtonGroup = ({ technologies }) => {
    const dispatch = useDispatch()
    const DispatchBtnAction = (e) => {
        const tech = e.target.dataset.tech;
        console.log(tech)
        if(tech === "Delete"){dispatch(deleteTechnology("")); return;}
        dispatch(setTechnology(tech));
    }
    return (
        <div>
            {technologies.map((tech, i) => (
                <button
                    data-tech={tech}
                    key={`btn-${i}`}
                    onClick={DispatchBtnAction}
                >
                    {tech}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;
