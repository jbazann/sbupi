import {devLog, event, sids} from "@l/common.shared.js";
import {buttons, events} from "@c/layout/menu/base/MenuConstants.shared.js";
import Menu from "@c/layout/menu/base/Menu.shared.jsx";
import MenuContainer from "@c/layout/menu/base/MenuContainer.shared.jsx";
import {useEventListener, useRefs} from "@l/hooks.client.js";
import ClientMenuButton from "@c/layout/menu/client/ClientMenuButton.client.jsx";
import {setChecked} from "@l/utils.client.js";

export default ClientMenu

function ClientMenu({
                        children,
                        label = 'unlabeled',
                        id,
                        ref,
                        parentRef,
                        bareContainer = false,
}) {
    const [ onRadio, offRadio ] =
        useRefs(2, null)
    if (ref) ref.current = {onRadio,offRadio}
    const [ offButton, radioGroupName ] = sids(id,[buttons.off, 'rgn'])
    const {onRadio: parentOnRadio,offRadio: parentOffRadio} = parentRef.current

    useListeners(id,onRadio,offRadio,parentOnRadio,parentOffRadio)

    const BackButton = () => <>
        <ClientMenuButton id={id} forcedId={offButton}
                          label={'Back'} labelKey={'misc.back'}
                          kind={buttons.off} />
    </>
    return <>
        <Menu id={id} isMainMenu={isMainMenu} bareContainer={bareContainer}
              routingKey={routingKey} label={label}
              onRadioRef={onRadio} offRadioRef={offRadio} radioGroupName={radioGroupName} >
            <MenuContainer bare={bareContainer} owns={offButton}
                           BackButton={ <BackButton/> } >
                {children}
            </MenuContainer>
        </Menu>
    </>
}

function useListeners(id, onRadioRef, offRadioRef, parentOnRadioRef, parentOffRadioRef) {
    useEventListener(event(id,events.on), (_e) => setChecked(onRadioRef.current))
    useEventListener(event(id,events.on), (_e) => setChecked(parentOffRadioRef.current))
    useEventListener(event(id,events.off), (_e) => setChecked(offRadioRef.current))
    useEventListener(event(id,events.off), (_e) => setChecked(parentOnRadioRef.current))
}