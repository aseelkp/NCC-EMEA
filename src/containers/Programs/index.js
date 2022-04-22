import './index.css';


import React from 'react'
import {Programs} from '../../components';

// Images
import CleanlinessDrive from '../../assets/ProgramImg/CleanlinessDrive.jpg';
import EnrolmentDay from '../../assets/ProgramImg/EnrolmentDay.jpg';
import IndependanceDay from '../../assets/ProgramImg/IndependanceDay.jpg';
import RepublicDay from '../../assets/ProgramImg/RepublicDay.jpg';
import RIPBibinRawat from '../../assets/ProgramImg/RIPBibinRawat.jpg';
import Startup from '../../assets/ProgramImg/StartUp.jpg';

function ProgramSection() {
  return (
    <div className="program section-margin" id='Programs'>
        <h1 className="gradient-text">Programs</h1>
        <div className="program-container">
            <Programs image={IndependanceDay} title="Independance Day" text="75th Independence Day was celebrated with due respect at EMEA College of arts and Science Kondotty. At 8:10 AM all cadets were assembled infront of the college. Turn outs of Cadets were checked by both SD and SW senior."/>
            <Programs image={CleanlinessDrive} title="Cleanliness Drive" text="The team NCC of EMEA Collage of Arts and Science Kondotty had conducted a cleanliness drive as a part of 'Swatchatha Pakwatha' on 12th September 2021.Good social hygiene is important for both health and social reasons. Not only personal hygiene but also making our neighbourhood hygienic is very important. Therefore the programme was a part of social responsibility. The programme was conducted at Mini Ooty and Thiruvonamala. All Cadets were requested to assemble at the college by 9:00 am. Almost 25 Cadets were present in the programme."/>
            <Programs image={EnrolmentDay} title="Enrolment Day" text="The team NCC of EMEA Collage of Arts And Science Kondotty had enrolled new cadets on 23th November 2021.The NCC is one of the premier organization in our country  contributed in propagating national unity and integrity amongst the youth. Its role in instilling in them the values of character, discipline and hard work and shaping them into dynamic and responsible citizens of the country had been well recognized. The aspirants were requested to assemble at the college by 10:00 AM. Almost 80 students were present in the event. The selection processes were held from the main Auditorium and Ground of the collage under the guidance of  Mahesh Chandra sab and Pramod sab."/>
            <Programs image={RIPBibinRawat} title="RIP GEN BIPIN RAWAT" text="Gen Bipin Rawat, his wife Madhulika and 11 other people on board an Indian Air Force helicopter died in a crash near Coonoor in Tamil Nadu on 08th December 2021.Condolences over the demise of Chief of Defence Staff Gen Bipin Rawat poured from several countries.As India's first Chief of Defence Staff, General Rawat spearheaded a historic period of transformation in the Indian military, the US mission said in a statement."/>
            <Programs image={Startup} title="Start Up" text="The team NCC of EMEA College of Arts and Science Kondotty conducted start up program on 10-12-21. it was actually a great time to know each other since there was new comers who got selected on Ncc .The program was conducted from the seminar hall of the college. All cadets were requested to assemble at the seminar hall by 10:00am."/>
            <Programs image={RepublicDay} title="Republic Day" text=" N.C.C of EMEA college of Arts and Science celebrated the 73rd Republic Day of nation on 26th January, 2022 in its all glory and grandeur. All cadets were present at the college before 8.30 AM. Principal and ANO of EMEA College Lt.Abdul Rasheed.P greeted   students. The main guest of the Republic Day celebrations were Panakkad Sayyid Basheer Ali Shihab Thangal ,Collage managing committee president and Balathil Bappu,Collage manager .  The National flag was hoisted at the main entrance at 9.45 AM   by ANO and the chief guests"/>
        </div>
    </div>
    );
}

export default ProgramSection;
