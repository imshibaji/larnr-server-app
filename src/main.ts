import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('LARNR Server')
    .setDescription('LARNR API Server')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: '*',
  });
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
  await app.listen(process.env.PORT, process.env.HOST, () => {
    console.log('Server: http://' + process.env.HOST + ':' + process.env.PORT);
  });
}
bootstrap();
