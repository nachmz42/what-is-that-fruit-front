import { Upload, Button, message, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./UploadImage.css";
import { Divider, List, Typography } from "antd";
import { predictPredictGet } from "@api/services";
import { useEffect, useState } from "react";
import { FruitPredictionDto } from "@api/models/FruitPrediction";

const { Title, Paragraph } = Typography;

const UploadImage = () => {
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const props = {
    name: "file",
    action: "http://127.0.0.1:8000/upload",
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file: File) => {
      return checkFileType(file);
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        setUploaded(false);
      }
      if (info.file.status === "done") {
        setUploaded(true);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        setUploaded(false);
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const checkFileType = (file: File) => {
    const isJpg = file.type === "image/jpeg" || file.type === "image/jpg";
    if (!isJpg) {
      message.error("You can only upload JPG files!");
    }
    return isJpg;
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

  const onClickPredict = async () => {
    const resp = await predictPredictGet();
    setPrediction(resp.prediction);
    showModal();
  };

  useEffect(() => {}, [prediction]);

  return (
    <>
      <Modal
        title="Prediction"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes it is!"
        cancelText="No... :("
      >
        <p>Is your fruit a {prediction}?</p>
      </Modal>
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
        {!uploaded ? (
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        ) : (
          <>
            <Button color="primary" onClick={onClickPredict}>
              Predict!
            </Button>
            <Button
              color="primary"
              onClick={() => {
                setUploaded(false);
              }}
            >
              Upload new Image
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default UploadImage;
