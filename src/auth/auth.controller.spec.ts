import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SignupAuthDto } from './dto/auth.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  const dto: SignupAuthDto = {
    first_name: 'test_first_name',
    last_name: 'test_last_name',
    username: 'test_username',
    country: 'test_country',
    email: 'test_email',
    password: 'test_password',
  };

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(authService).toBeDefined();
  });

  describe('signup', () => {
    it('should call authService.signup with the provided dto', async () => {
      const signupSpy = jest.spyOn(authService, 'signup');

      // Act
      await authService.signup(dto);

      // Assert
      expect(signupSpy).toHaveBeenCalledWith(dto);
    });

    it('should return the result from authService.signup', async () => {
      const date = new Date();

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      // This arrangement can be altered based on how we want the date's format to appear.
      const currentDate = `${day}-${month}-${year}`;

      const expectedResult = {
        id: 'test_id',
        createdAt: currentDate,
        updatedAt: currentDate,
        email: 'test_email',
        first_name: 'test_first_name',
        last_name: 'test_last_name',
        username: 'test_username',
        country: 'test_country',
      };
      //jest.spyOn(authService, 'signup').mockResolvedValue(expectedResult);

      // Act
      const result = await authService.signup(dto);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should throw an error if authService.signup throws an error', async () => {
      const expectedError = new Error('Some error');
      jest.spyOn(authService, 'signup').mockRejectedValue(expectedError);

      // Act & Assert
      await expect(authService.signup(dto)).rejects.toThrow(expectedError);
    });
  });
});
