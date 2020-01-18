import { CognitiveServicesCredentials } from "@azure/ms-rest-azure-js";
import { FaceClient, FaceModels } from "@azure/cognitiveservices-face";

const cognitiveServiceCredentials = new CognitiveServicesCredentials(
  process.env.GATSBY_AZURE_FACE_KEY
  // 'abcdef'
);

const client = new FaceClient(
  cognitiveServiceCredentials,
  process.env.GATSBY_AZURE_FACE_ENDPOINT
);

export default async function azureCognitiveVision(stream) {
  const options = {
    returnFaceLandmarks: true,
    returnFaceAttributes: [
      "age",
      "gender",
      "headPose",
      "smile",
      "facialHair",
      "glasses",
      "emotion",
      "hair",
      "makeup",
      "occlusion",
      "accessories",
      "blur",
      "exposure",
      "noise",
    ],
  };

  return client.face.detectWithStream(stream, options);
}
