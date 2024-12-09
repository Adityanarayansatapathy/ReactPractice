import { useState } from "react";
import './Lesson.css'; 
import { HeaderComp } from "../NavData/Header/HeaderComp";


export function Lesson(){
    let [lessonList, setLessonList] = useState([]);
    return(
      <div>
         <HeaderComp/>
        <div>
            <h1>-:Add Lesson:-</h1>
            <AddLesson lessonList={lessonList} setLessonList={setLessonList}/>
            <ShowLessonDetails lessonList={lessonList} setLessonList={setLessonList}/>
        </div>
      </div>
    )

}

function AddLesson({lessonList, setLessonList}){
    const addLesson = (e) => {
        e.preventDefault();
        const lessonName = e.target.lessonName.value;
        const description = e.target.description.value;
        const isDelete = false;
        const newLesson = {
            lessonName,
            description,
            isDelete
        }
        
        setLessonList([...lessonList, newLesson]);
        console.log("Lesson added successfully:", lessonList);
        e.target.reset();  
    }
    return(
        <div>
            <form onSubmit={addLesson}>
                <label>Lesson Name:</label>
                <input type="text" name="lessonName"/>
                <label>Description:</label>
                <textarea name="description" rows="4" cols="50"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
function ShowLessonDetails({ lessonList, setLessonList }) {
    const lessonDelete = (index) => {

      const updatedLessonList = [...lessonList];
      const updatedLesson = updatedLessonList[index]; // Get the lesson at the specified index
  
      // Update the lesson's `isDelete` property to true
      if (updatedLesson) {
        updatedLesson.isDelete = true;
        updatedLessonList[index] = updatedLesson; // Update the list with the modified lesson
        setLessonList(updatedLessonList); // Update the state with the new list
        console.log("Lesson marked as deleted successfully:", updatedLessonList);
      }
    };
  
    return (
      <div>
        <h2>:Lesson List:</h2>
        <ul>
          {lessonList.map((lesson, index) => (
            <li key={index}>
              {/* Check if the lesson is marked as deleted */}
              {lesson.isDelete ? (
                <>
                  <strike>
                    <h3>{lesson.lessonName}</h3>
                    <p>{lesson.description}</p>
                  </strike>
                </>
              ) : (
                <>
                  <h3>{lesson.lessonName}</h3>
                  <p>{lesson.description}</p>
                  <button onClick={() => lessonDelete(index)}>&#10006;</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

  // function Popup({ content, setShowPopup }) {
  //   return (
  //     <div className="popup-overlay">
  //       <div className="popup-container">
  //         <h2>Lesson Added Successfully!</h2>
  //         <p>
  //           <strong>Lesson Name:</strong> {content.lessonName}
  //         </p>
  //         <p>
  //           <strong>Description:</strong> {content.description}
  //         </p>
  //         <button onClick={() => setShowPopup(false)}>Close</button>
  //       </div>
  //     </div>
  //   );
  // }