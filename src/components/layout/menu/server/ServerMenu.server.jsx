import {devLog, sids} from "@l/common.shared.js";
import HydrationRoot from "../../../system/HydrationRoot.server.jsx";
import {placeholders} from "@l/placeholders.shared.js";
import {radios, buttons} from "@c/layout/menu/base/MenuConstants.shared.js";
import Menu from "@c/layout/menu/base/Menu.shared.jsx";
import MenuContainer from "@c/layout/menu/base/MenuContainer.shared.jsx";
import ServerMenuButton from "@c/layout/menu/server/ServerMenuButton.server.jsx";

export default ServerMenu

function ServerMenu({
                        children,
                        label = 'unlabeled',
                        routingKey,
                        id,
                        parentId,
                        isMainMenu = false,
                        bareContainer = false
}) {
    const [ onRadio, offRadio, radioGroupName, offButton ] =
        sids(id, [radios.on,radios.off,radios.group,buttons.off])
    const [ parentOnRadio, parentOffRadio ] =
        (parentId && sids(parentId, [radios.on, radios.off])) ?? ['','']

    const BackButton = isMainMenu ? null : () => <>
        <ServerMenuButton id={id} forcedId={offButton}
                          label={'Back'} labelKey={'misc.back'}
                          kind={buttons.off} />
    </>
    return <>
        <Menu id={id} isMainMenu={isMainMenu} bareContainer={bareContainer}
              routingKey={routingKey} label={label}
              onRadio={onRadio} offRadio={offRadio} radioGroupName={radioGroupName} >
            <MenuContainer bare={bareContainer} owns={offButton}
                           BackButton={BackButton} >
                {children}
            </MenuContainer>
            {isMainMenu ? null :
                <HydrationRoot comp={placeholders.ServerMenuScript}
                               metadata={ServerMenu.name}
                               data={{
                                   id,
                                   onRadio, offRadio,
                                   parentOnRadio, parentOffRadio
                               }} />
            }
        </Menu>
    </>
}