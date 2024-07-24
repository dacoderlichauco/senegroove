import React, { useEffect, useState, useRef } from "react";
import Animation from "./Animation";




const Lesson_1: React.FC = () => {

  return (
<div>
      
    <Animation videoUrl="/Timeline 1.mov" gem_json_file='/basic_rythm.json' x_cord_L={35} x_cord_R={75}/>
    </div>

  );
};

export default Lesson_1;
