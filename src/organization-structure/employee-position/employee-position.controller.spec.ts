import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePositionController } from './employee-position.controller';
//ds
describe('EmployeePositionController', () => {
  let controller: EmployeePositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeePositionController],
    }).compile();

    controller = module.get<EmployeePositionController>(EmployeePositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
