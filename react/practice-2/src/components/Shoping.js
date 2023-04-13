import React, { useState } from 'react'

function Shoping() {
    const output = document.querySelector(".output-data");
    const r1 = document.getElementById("r1");
    const r2 = document.getElementById("r2");
    // output.style.opacity = 0;
    const [name, setName] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [quanti, setQuanti] = useState("");
    let [gen, setGen] = useState("Male")
    let [outName, setOutName] = useState("");
    let [outGen, setOutGen] = useState("");
    let [outProductName, setoutProductName] = useState("");
    let [outPrice, setOutPrice] = useState("");
    let [outQuanti, setOutQuanti] = useState("");
    let [outTotal, setOutTotal] = useState("");
    let [outDis, setOutDis] = useState("");
    let [outNet, setOutNet] = useState("");
    const submit1 = () => {
        setOutName(name);
        setOutGen("");
        setoutProductName(productName);
        setOutPrice(price);
        setOutQuanti(quanti);
        setOutTotal(Number(price) * Number(quanti))
        if (r1.checked == true) {
            console.log("Male");
            setOutGen("Male");
        }
        else if (r2.checked == true) {
            console.log("feMale");
            setOutGen("Female");
        }
        if (outTotal >= 5000) {
            console.log(setOutTotal);
            setOutDis(50 + "%")
            setOutNet(outTotal - ((outTotal / 100) * 50));
        }
        else if (outTotal <= 4000 && outTotal >= 4999) {
            setOutDis(40 + "%")
            setOutNet(outTotal - ((outTotal / 100) * 40));
        }
        else if (outTotal <= 3000 && outTotal >= 3999) {
            setOutDis(30 + "%")
            setOutNet(outTotal - ((outTotal / 100) * 30));
        }
        else {
            setOutDis("none")
            setOutNet(outTotal);
        }


    }
    return (
        <div className='shpoping-main'>
            <div className='input-data'>
                <label>Name =</label><input type="text" placeholder='Enter customer name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label>Gender =</label><input type="radio" name='male' id="r1" onChange={(e) => setGen(e.target.value)} value={gen} />Male<input type="radio" id="r2" onChange={(e) => setGen(e.target.value)} name="male" value={gen} />Female<br />
                <label>product =</label><input type="text" placeholder='Enter product name' value={productName} onChange={(e) => setProductName(e.target.value)} /><br />
                <label>Price =</label><input type="text" placeholder='Enter product price ' value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                <label>Quantity =</label><input type="text" placeholder='Enter product quantity' value={quanti} onChange={(e) => setQuanti(e.target.value)} /><br />
                <button className='btn12' onClick={submit1}>Submit</button>
            </div>
            <div className='output-data'>
                <label>Name =</label><input type='text' className='t1' value={outName} onChange={(e) => outName(e.target.value)} /><br />
                <label>Gender =</label><input type='text' className='t1' value={outGen} onChange={(e) => outGen(e.target.value)} /><br />
                <label>Product Name =</label><input type='text' className='t1' value={outProductName} onChange={(e) => outProductName(e.target.value)} /><br />
                <label>Price =</label><input type='text' className='t1' value={outPrice} onChange={(e) => outPrice(e.target.value)} /><br />
                <label>Quantity =</label><input type='text' className='t1' value={outQuanti} onChange={(e) => outQuanti(e.target.value)} /><br />
                <label>total =</label><input type='text' className='t1' value={outTotal} onChange={(e) => outTotal(e.target.value)} /><br />
                <label>Discount =</label><input type='text' className='t1' value={outDis} onChange={(e) => outDis(e.target.value)} /><br />
                <label>Net Price =</label><input type='text' className='t1' value={outNet} onChange={(e) => outNet(e.target.value)} />

            </div>

        </div>

    )
}

export default Shoping