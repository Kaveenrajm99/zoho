import React from 'react'

const Viewtolls = ({ datas }) => {
    return datas.map((data) => {
        return (
            <tr key={data}>
                <td>{data.toll}</td>
                <td>{data.Single1}/{data.Single2}</td>
                <td>{data.Single3}/{data.Single4}</td>
                <td>{data.Single5}/{data.Single6}</td>
                <td>{data.Single7}/{data.Single8}</td>

            </tr>)

    })
}

export default Viewtolls