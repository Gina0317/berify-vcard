import { getJWT } from 'core/common';
import { UPLOAD_FILE_TYPE, getUploadFileStr } from 'core/enum/UploadFileType';

const apiHost = process.env.API_HOST;
const moduleName = 'file';
const apiPrefix = `${apiHost}/api/${moduleName}`;

async function getS3UploadUrl(type: UPLOAD_FILE_TYPE, name: string) {
  const result = await fetch(`${apiPrefix}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getJWT()}`,
    },
    body: JSON.stringify({
      key: `${getUploadFileStr(type)}/${new Date().getTime()}/${name}`,
    }),
  });

  return result.json();
}

async function uploadToS3(uploadUrl: string, file: File) {
  const result = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: file,
  });
  return result;
}

async function upload(type: UPLOAD_FILE_TYPE, file: File) {
  const uploadUrlResult = await getS3UploadUrl(type, file.name);
  const result = await uploadToS3(uploadUrlResult.url, file);

  if (result.status === 200) {
    return { url: uploadUrlResult.downloadUrl };
  } else {
    return { error: 'fail to upload', url: '' };
  }
}

const file = {
  upload,
};

export default file;
