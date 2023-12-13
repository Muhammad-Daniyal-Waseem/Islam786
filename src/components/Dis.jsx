import React, {useEffect, useState} from "react";

const Dis = (props) => {
    const [data, setData] = useState(null);
    const [grades, setGrades] = useState([]); // Use state to store grades
    useEffect(() => {
        async function fetchData() {
            try {
              
                const response = await fetch(
                    `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${props.lan}-${props.name}/${props.no}.json`
                );
                const jsonData = await response.json();
                setData(jsonData);
                setGrades(jsonData.hadiths[0].grades);
                } 
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [props.lan, props.name, props.no]);
function abc()
{
  props.setClickedHadees(null);
  props.setOff(true);
}

    return (
      <div className="absolute top-0 z-10 h-fit w-full pb-20" style={{backgroundColor: '#1c2121'}}>
            <button className='text-white w-20 flex justify-center items-center px-2 py-2 m-4 rounded-2xl hover:text-yellow-200' style={{ backgroundColor: '#263329'}} onClick={abc}><i class=" text-white fa-solid fa-arrow-left px-2 hover:text-yellow-200"></i>Back</button>
        <div className={`container text-white ${window.outerWidth>800?"flex":""} `}>
            {
            props.no<props.totalhadees?(
              data && (
                <div className={`h-full ${window.outerWidth<800?"w-full m-auto":"w-1/2 my-10 mx-5"}`}>
                    <div className={`text flex flex-col justify-start items-center mx-4 ${window.outerWidth>800?"":"mx-auto"}`}>
                    <h1 className="text-3xl text-yellow-200 font-bold">Text</h1>
                    {data.hadiths[0].text ? (
                      props.lan === "urd" ? (
                        <p className="px-3 py-6 w-fit text-center font -urdu my-4 text-lg rounded-2xl"  style={{ backgroundColor: '#263329'}}>{data.hadiths[0].text}</p>
                        ) : (
                            <p className="w-fit text-center px-3 py-6 my-4 text-lg rounded-2xl" style={{ backgroundColor: '#263329'}}>{data.hadiths[0].text}</p>
                        )
                    ) : (
                        <p className="w-fit text-center px-3 py-6 my-4 text-lg rounded-2xl" style={{ backgroundColor: '#263329'}}>No text available</p>
                    )}
                    </div>
                    <div className={`reference my-auto text-2xl ${window.outerWidth>800?"":"mx-auto"}`}>
                    <h2 className="text-yellow-200 mx-8 font-bold">Reference</h2>
                    <p className="reference my-2 mx-3  p-6 rounded-2xl w-fit" style={{ backgroundColor: '#263329'}}>
                       <span className="text-green-400"> Book: </span> {data.hadiths[0].reference.book}
                        <br />
                       <span className="text-green-400">Hadith: </span> {data.hadiths[0].reference.hadith}
                        <br />
                       <span className="text-green-400"> Name: </span> {data.metadata.name}
                    </p>
                    </div>
                    <div className={`status text-2xl mx-4 my-2 ${window.outerWidth>800?"":"mx-auto"}`}>
                    <h2 className="text-yellow-200 font-bold mx-4">Status</h2>
                    {grades.length > 0 ? (
                      <ul className="w-fit p-6 my-4 rounded-2xl" style={{ backgroundColor: '#263329'}}>
                            {grades.map((grade, index) => (
                              <li key={index}>
                                   <span className="text-green-400"> {grade.name}:  </span> {grade.grade}
                                </li>
                            ))}
                        </ul>
                    ) : (
                      <p className="w-fit p-6 rounded-2xl" style={{ backgroundColor: '#263329'}}>Sahih</p>
                      )}
                      </div>
                </div>
            ))
          :(
            <p className="w-fit p-6 rounded-2xl" style={{ backgroundColor: '#263329'}}>Invalid Number</p>
          )
          }
          {window.outerWidth>800?(
          <div className="image_container w-1/2 h-full  px-2 py-2 mx-6 mt-12 border-solid border-yellow-400 border-2">
            <img className="h-650 w-full" src="dis.jpeg" alt="Loading..." />
          </div>):("")}
        </div>
            </div>
    );
};

export default Dis;
