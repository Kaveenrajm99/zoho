import React, { useState, useEffect } from 'react';
import Viewtolls from './Viewtolls';


const Addtoll = () => {

    const [tollname, settollname] = useState([]);

    const [toll, settoll] = useState('');
    const [vehicle1, setvehicle1] = useState('');
    const [vehicle2, setvehicle2] = useState('');
    const [vehicle3, setvehicle3] = useState('');
    const [vehicle4, setvehicle4] = useState('');
    const [Single1, setSingle1] = useState('');
    const [Single2, setSingle2] = useState('');
    const [Single3, setSingle3] = useState('');
    const [Single4, setSingle4] = useState('');
    const [Single5, setSingle5] = useState('');
    const [Single6, setSingle6] = useState('');
    const [Single7, setSingle7] = useState('');
    const [Single8, setSingle8] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        let tolls = {
            toll,
            vehicle1,
            vehicle2,
            vehicle3,
            vehicle4,
            Single1,
            Single2,
            Single3,
            Single4,
            Single5,
            Single6,
            Single7,
            Single8
        }

        settollname([...tollname, tolls]);
        alert('Tolllist is update')
        settoll('');
        setvehicle1('');
        setvehicle2('');
        setvehicle3('');
        setvehicle4('');
        setSingle1('');
        setSingle2('');
        setSingle3('');
        setSingle4('');
        setSingle5('');
        setSingle6('');
        setSingle7('');
        setSingle8('');
    }

    useEffect(() => {
        localStorage.setItem('tolldetails', JSON.stringify(tollname));
    }, [tollname])



    return (
        <>
            <div className='head'><h1 className='title'>AddToll Details</h1>
                <fieldset className='border fieldset'>
                    <form onSubmit={handleSubmit} >
                        <div className='head'><label><h3>Toll Name*</h3> </label>
                            <input type='text' className='box' placeholder="Toll Name" required onChange={(e) => settoll(e.target.value)} value={toll} ></input>
                        </div>
                        <h3 className='head'>Vehicle Fare Details</h3>
                        <div className='head'>
                            <select id="cars" name="cars" value={vehicle1} onChange={(e) => setvehicle1(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type='number' className='boxs' placeholder="Single Journey" required onChange={(e) => setSingle1(e.target.value)} value={Single1} ></input>
                            <input type='number' className='boxs' placeholder="Return Journey" required onChange={(e) => setSingle2(e.target.value)} value={Single2}  ></input>
                        </div>
                        <div className='head'>
                            <select id="cars" name="cars" value={vehicle2} onChange={(e) => setvehicle2(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type='number' className='boxs' placeholder="Single Journey" required onChange={(e) => setSingle3(e.target.value)} value={Single3}   ></input>
                            <input type='number' className='boxs' placeholder="Return Journey" required onChange={(e) => setSingle4(e.target.value)} value={Single4}  ></input>
                        </div>
                        <div className='head'>
                            <select id="cars" name="cars" value={vehicle3} onChange={(e) => setvehicle3(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type='number' className='boxs' placeholder="Single Journey" required onChange={(e) => setSingle5(e.target.value)} value={Single5}  ></input>
                            <input type='number' className='boxs' placeholder="Return Journey" required onChange={(e) => setSingle6(e.target.value)} value={Single6}  ></input>
                        </div>
                        <div className='head'>
                            <select id="cars" name="cars" value={vehicle4} onChange={(e) => setvehicle4(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <input type='number' className='boxs' placeholder="Single Journey" required onChange={(e) => setSingle7(e.target.value)} value={Single7}  ></input>
                            <input type='number' className='boxs' placeholder="Return Journey" required onChange={(e) => setSingle8(e.target.value)} value={Single8}  ></input>
                        </div>
                        <div className='title'><button className='button boxs' >Add</button></div>
                    </form>
                </fieldset >

                <div>
                    {tollname.length > 0 && <>
                        <h1 className='title'>List Of TollGates</h1>
                        <div className='head'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Toll Name</th>
                                        <th>Car/Jeep/Van</th>
                                        <th>LCV</th>
                                        <th>Truck/Bus</th>
                                        <th>Heavy vehicle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Viewtolls datas={tollname} />
                                </tbody>
                            </table>
                        </div></>}
                    {tollname.length < 1 && <h1 className='title'>There is No Data in LocalStorage to get Toll
                        details Add the Details</h1>}
                </div>
            </div >
        </>
    )
}

export default Addtoll