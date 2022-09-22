import React, { useEffect, useState } from 'react'

const Addvehicle = () => {

    const [vehicle, setvehicle] = useState([]);

    const [toll, settoll] = useState('');
    const [number, setnumber] = useState('');
    const [vehicletype, setvehicletype] = useState('');
    const [tariff, settariff] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        let user = {
            toll,
            vehicletype,
            number,
            tariff,
        }

        setvehicle([...vehicle, user]);
        alert('Vehicle is update')
        settoll('');
        setnumber('');
        setvehicletype('');
        settariff('');
    }

    useEffect(() => {
        localStorage.setItem('vehicledetails', JSON.stringify(vehicle));
    }, [vehicle])
    return (
        <>
            <div className='head'><h1 className='title'>AddVehicle Details</h1>
                <fieldset className='border fieldset'>
                    <form onSubmit={handleSubmit}>

                        <div className='head'><label><h3>Toll Name*</h3> </label>
                            <input type='text' className='box' placeholder="Toll Name" required onChange={(e) => settoll(e.target.value)} value={toll} ></input>
                        </div>

                        <h3 className='head'>Vehicle Types</h3>
                        <div className='head'>
                            <select id="cars" name="cars" className='margin' value={vehicletype} onChange={(e) => setvehicletype(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                                <option value="LCV">LCV</option>
                                <option value="Truck/Bus">Truck/Bus</option>
                                <option value="Heavy vehicle">Heavy vehicle</option>
                            </select>
                            <select id="cars" name="cars" className='margin' value={tariff} onChange={(e) => settariff(e.target.value)}>
                                <option value="">Select vehicle for Tariff</option>
                                <option value="100">Car/Jeep/Van</option>
                                <option value="150">LCV</option>
                                <option value="200">Truck/Bus</option>
                                <option value="250">Heavy vehicle</option>
                            </select>
                        </div>

                        <div className='head'><label><h3>Vehicle No*</h3> </label>
                            <input type='text' className='box' placeholder="Vehicle Number" required onChange={(e) => setnumber(e.target.value)} value={number} ></input>
                        </div>

                        <div className='head'><label><h3>Tariff *</h3> </label>
                            <input type='text' className='box' placeholder="Tariff Value" onChange={(e) => settariff(e.target.value)} value={tariff} disabled ></input>
                        </div>

                        <div className='title'><button className='button boxs'  >Add</button></div>
                    </form>
                </fieldset >
                <div>
                    {vehicle.length > 0 && <>
                        <h1 className='title'>List Of TollGates</h1>
                        <div className='head'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Toll Name</th>
                                        <th>Vehicletype</th>
                                        <th>Vehicle Number</th>
                                        <th>Tariff</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicle.map((data) => {
                                        return <>

                                            <tr>
                                                <td>{data.toll}</td>
                                                <td>{data.vehicletype}</td>
                                                <td>{data.number}</td>
                                                <td>{data.tariff}</td>
                                            </tr>

                                        </>
                                    })}
                                </tbody>
                            </table>
                        </div></>}
                    {vehicle.length < 1 && <h1 className='title'>There is No Data in LocalStorage to get  Vehicle
                        details Add the Details</h1>}
                </div>
            </div>
        </>)
}

export default Addvehicle