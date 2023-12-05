import clientPromise from "../../mongodb";

export async function getServerSideProps(props) {
    const {sectionTitle} = props;
    try {
        const client = await clientPromise;
        const db = client.db("database1");

        const entries = await db
            .collection("collection1")
            .find({})
            .toArray();
        return {
            props: { entries: JSON.parse(JSON.stringify(movies)) },
        };
    } catch (e) {
        console.error(e);
    }
}