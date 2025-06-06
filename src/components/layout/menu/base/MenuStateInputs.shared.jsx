export default MenuStateInputs

function MenuStateInputs({
                             onRadio,
                             offRadio,
                             onRadioRef,
                             offRadioRef,
                             radioGroupName,
                             routingKey,
                             isDefaultOn,
                             onClass,
                             offClass
}) {
    return <>
        <input type="radio" id={onRadio} name={radioGroupName}
               ref={onRadioRef}
               data-route={routingKey}
               defaultChecked={isDefaultOn}
               className={onClass} />
        <input type="radio" id={offRadio} name={radioGroupName}
               ref={offRadioRef}
               data-route-off={routingKey}
               defaultChecked={!isDefaultOn}
               className={offClass} />
    </>
}