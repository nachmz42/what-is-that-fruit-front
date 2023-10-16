import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./UploadImage.css";
import { Divider, List, Typography } from "antd";

const { Title, Paragraph } = Typography;

const UploadImage = () => {
  const props = {
    name: "file",
    action: "http://127.0.0.1:8000/predict/fruit",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Chickoo",
    "Grapes",
    "Kiwi",
    "Mango",
    "Orange",
    "Strawberry",
  ];

  return (
    <>
      <Title
        style={{ fontFamily: "Inter, sans-serif" }}
        className="upload-button-container"
      >
        Here you can upload your photo
      </Title>
      <Paragraph
        style={{ fontFamily: "Inter, sans-serif" }}
        className="upload-button-container"
      >
        The image must be of one of these fruits:{" "}
      </Paragraph>
      <div className="list-container">
        <div className="inner-container">
          <Divider orientation="left">FRUITS</Divider>
          <List
            bordered
            dataSource={fruits}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark></Typography.Text> {item}
              </List.Item>
            )}
          />
        </div>
      </div>
      <div className="upload-button-container">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </div>
    </>
  );
};

export default UploadImage;
