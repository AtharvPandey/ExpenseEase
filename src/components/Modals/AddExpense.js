import React from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
} from "antd";
function AddExpenseModal({
  isExpenseModalVisible,
  handleExpenseCancel,
  onFinish,
}) {
  const [form] = Form.useForm();
  return (
    <Modal
      style={{ fontWeight: 600 }}
      title="Add Expense"
      visible={isExpenseModalVisible}
      onCancel={handleExpenseCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          onFinish(values, "expense");
          form.resetFields();
        }}
      >
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Enter a description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input the description of the transaction!",
            },
          ]}
        >
          <Input type="text" className="custom-input" />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Amount"
          name="amount"
          rules={[
            { required: true, message: "Please input the expense amount!" },
          ]}
        >
          <Input type="number" className="custom-input" />
        </Form.Item>
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Date"
          name="date"
          rules={[
            { required: true, message: "Please select the expense date!" },
          ]}
        >
          <DatePicker className="custom-input" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          label="Tag"
          name="tag"
          style={{ fontWeight: 600 }}
          rules={[{ required: true, message: "Please select a tag!" }]}
        >
          <Select className="select-input-2">
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="education">Education</Select.Option>
            <Select.Option value="office">Office</Select.Option>
            <Select.Option value="groceries">Groceries</Select.Option>
            <Select.Option value="transportation">Transportation</Select.Option>
            <Select.Option value="utilities">Utilities</Select.Option>
            <Select.Option value="clothing">Clothing</Select.Option>
            <Select.Option value="stationery">Stationery</Select.Option>
            <Select.Option value="electronics">Electronics</Select.Option>
            <Select.Option value="personalcare">Personal Care</Select.Option>
            <Select.Option value="housing">Housing</Select.Option>
            <Select.Option value="entertainment">Entertainment</Select.Option>
            <Select.Option value="sports">Sports</Select.Option>
            <Select.Option value="books">Books</Select.Option>
            <Select.Option value="healthcare">Healthcare</Select.Option>
            <Select.Option value="internet">Internet</Select.Option>
            <Select.Option value="mobile">Mobile</Select.Option>
            <Select.Option value="banking">Banking</Select.Option>
            <Select.Option value="eatingout">Eating Out</Select.Option>
            <Select.Option value="socializing">Socializing</Select.Option>
            <Select.Option value="fitness">Fitness</Select.Option>
            <Select.Option value="study">Study</Select.Option>
            <Select.Option value="hobbies">Hobbies</Select.Option>

            {/* Add more tags here */}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button className="btn btn-blue" type="primary" htmlType="submit">
            Add Expense
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddExpenseModal;
