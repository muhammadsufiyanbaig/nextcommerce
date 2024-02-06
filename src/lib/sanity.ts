
import imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "../../node_modules/next-sanity/dist/index";

export const client = createClient({
    projectId: 'gi092nqq',
    dataset: 'production',
    apiVersion: "2022-03-25",
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
    return builder.image(source);
}