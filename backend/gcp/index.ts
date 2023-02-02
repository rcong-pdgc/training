import * as gcp from "@pulumi/gcp";
import { asset } from "@pulumi/pulumi";

const project = "lively-marking-376003";
const bucket = new gcp.storage.Bucket("bucket", {
    project: project
});

const bucketObject = new gcp.storage.BucketObject("crud-api-zip", {
    bucket: bucket.name,
    source: new asset.AssetArchive({
        ".": new asset.FileArchive("./app"),
    }),
});

const apiFunction = new gcp.cloudfunctions.Function("crud-api", {
    project: project,
    sourceArchiveBucket: bucket.name,
    runtime: "nodejs16",
    sourceArchiveObject: bucketObject.name,
    entryPoint: "app",
    triggerHttp: true,
    availableMemoryMb: 128,
});

const invoker = new gcp.cloudfunctions.FunctionIamMember("crud-api-invoker", {
    project: project,
    region: apiFunction.region,
    cloudFunction: apiFunction.name,
    role: "roles/cloudfunctions.invoker",
    member: "allUsers",
});

export const endpoint = apiFunction.httpsTriggerUrl;
