import { Card, Col, Row } from 'antd';
import { CgLivePhoto } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

const Homepage = () => {
  // Mock data (replace with actual data if needed)
  const data = {
    liveTenders: 10,
    corrigendum: 5,
    privateTenders: 8,
    publishToday: 3
  };

  return (
    <div className="p-10">
      <Row gutter={16}>
        {/* Live Tenders Card */}
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div className="flex justify-center mb-4">
              <CgLivePhoto size={50} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 text-center">Live Tenders</h3>
            <p className="text-2xl font-bold text-blue-600 text-center">{data.liveTenders}</p>
          </Card>
        </Col>

        {/* Corrigendum Card */}
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div className="flex justify-center mb-4">
              <AiFillHeart size={50} className="text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 text-center">Corrigendum</h3>
            <p className="text-2xl font-bold text-blue-600 text-center">{data.corrigendum}</p>
          </Card>
        </Col>

        {/* Private Tenders Card */}
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div className="flex justify-center mb-4">
              <AiFillFire size={50} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 text-center">Private Tenders</h3>
            <p className="text-2xl font-bold text-blue-600 text-center">{data.privateTenders}</p>
          </Card>
        </Col>

        {/* Publish Today Card */}
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <div className="flex justify-center mb-4">
              <AiFillLock size={50} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 text-center">Publish Today</h3>
            <p className="text-2xl font-bold text-blue-600 text-center">{data.publishToday}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
