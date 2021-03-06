import AddressIcon from "../icons/address_icon";
import DateIcon from "../icons/date_icon";
import classes from "./event_logistics.module.css";
import LogisticsItem from "./logistics_item";

function EventLogistics({ image, title, date, address }) {
    const humanReadableDate = new Date(date).toLocaleDateString("tr-Turkey", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedAddress = address.replace(", ", "\n");

    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={"/" + image} alt={title} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>{formattedAddress}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}
export default EventLogistics;
