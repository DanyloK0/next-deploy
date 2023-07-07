import GadgetListSSR from "./gadgetssr";
import Settings from "../settings/page";

export default function Catalog() {
    return (
        <div>
            <GadgetListSSR client={<Settings/>}/>
        </div>
    )
}