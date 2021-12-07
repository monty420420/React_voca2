import dummy from "../db/data.json";
import { useParams  } from "react-router-dom";
export default function Day() {
    
    const { day } = useParams();
    const wordList = dummy.words.filter(word => word.day === Number(day));
    //Number(day) 문자열끼리 비교해서 안나옴 따라서 Number사용하여 숫자가와도 비교가 가능하게
    
    
     


    return (
    <>
    <h2>Day {day}</h2>
    <table>
         <tbody>
             {wordList.map(word => (
                 <tr key={word.id}>
                     <td>
                         {word.eng}
                     </td>
                     <td>
                         {word.kor}
                     </td>
                 </tr>
             ))}
         </tbody>
    </table>
</>
);
}