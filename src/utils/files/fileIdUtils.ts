import configs from "../../configs";

var subRoute = "/files/";
function getUrlFromFileId(fileId: string): string {
  return configs.filesHostDomain + subRoute + fileId;
}

function transformUrlToFileId(imgUrl: string | null): string | null {
  if (!imgUrl) {
    return null;
  }

  if (imgUrl.startsWith("file_")) {
    return "fileId://" + imgUrl;
  } else if (imgUrl.includes(configs.filesHostDomain)) {
    return imgUrl.replace(configs.filesHostDomain + subRoute, "fileId://");
  }

  return imgUrl;
}

function imagesDbSetterTransfommer(images: string[] | null): string | null {
  if (images == null) {
    return null;
  } else {
    var newList: string[] = [];

    images.forEach((value, index) => {
      if (value) {
        var img = transformUrlToFileId(value);
        if (img) {
          newList.push(img);
        }
      }
    });

    return JSON.stringify(newList);
  }
}

function imageDbSetterTransfommer(image: string | null): string | null {
  if (!image) {
    return null;
  }

  return transformUrlToFileId(image);
}

function imageDbGetterTransfommer(rawValue: string | null): string | null {
  if (!rawValue) {
    return null;
  }
  if (rawValue.startsWith("fileId://")) {
    var id = rawValue.replace("fileId://", "");
    return getUrlFromFileId(id);
  } else if (rawValue.startsWith("file_")) {
    return getUrlFromFileId(rawValue);
  } else {
    return rawValue;
  }
}

function imagesDbGetterTransfommer(rawValue: string | null): string[] | null {
  if (!rawValue) {
    return null;
  }

  var imgs: string[] = JSON.parse(rawValue);
  var newList: string[] = [];
  imgs.forEach((fileId, index) => {
    if (fileId.startsWith("file_")) {
      newList.push(getUrlFromFileId(fileId));
    } else {
      newList.push(fileId);
    }
  });

  return newList;
}

export default {
  getUrlFromFileId,
  transformUrlToFileId,
  imageDbSetterTransfommer,
  imagesDbSetterTransfommer,
  imageDbGetterTransfommer,
  imagesDbGetterTransfommer,
};
