import { Button, Image } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Front() {
  const imageUrl = "../assets/images/logo.png";

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <Image
        width={200}
        src={imageUrl}
        alt="Imagen de inicio"
        preview={false}
      />
      <Title style={{ fontFamily: "Inter, sans-serif" }}>
        Wellcome to What is that fruit
      </Title>
      <Paragraph style={{ fontFamily: "Inter, sans-serif" }}>
        Here my computer will guess what fruit is what you uploaded
      </Paragraph>
      <div style={{ marginTop: "20px" }}>
        <Link to="/upload-image">
          <Button type="primary" style={{ marginRight: "10px" }}>
            Upload your image
          </Button>
        </Link>
      </div>
    </div>
  );
}
