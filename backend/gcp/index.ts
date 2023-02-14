import * as docker from "@pulumi/docker";
import * as gcp from "@pulumi/gcp";
import * as pulumi from "@pulumi/pulumi";

const location = gcp.config.region || "us-central1";
const imageName = "app";
const myImage = new docker.Image(imageName, {
    imageName: pulumi.interpolate`gcr.io/${gcp.config.project}/${imageName}:v1.0.0`,
    build: {
        context: "./app",
    },
});

const service = new gcp.cloudrun.Service("nodejs", {
    location,
    template: {
        spec: {
            containers: [{
                image: myImage.imageName,
                resources: {
                    limits: {
                        memory: "1Gi",
                    },
                },
            }],
            containerConcurrency: 50,
        },
    },
});

const iam = new gcp.cloudrun.IamMember("everyone", {
    service: service.name,
    location,
    role: "roles/run.invoker",
    member: "allUsers",
});

export const url = service.statuses[0].url;
