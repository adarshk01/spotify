 
export function FilterBtn(props:{name:string, width:number, bgColor: string, textCol: string , onClick:()=>void} ){
    return (
        <div>
            <div onClick={props.onClick} className={`mt-6 h-8 text-sm font-medium rounded-full flex justify-center pb-1`} 
            style={{width: `${props.width}px`, backgroundColor:`${props.bgColor}`, color:`${props.textCol}`}}>
                <button >{props.name}</button>
            </div>
        </div>
    )
}

