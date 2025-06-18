import { Pipe, PipeTransform } from '@angular/core';
import { XpLevelEnum } from '../entities/enums/xp-level-enum';

@Pipe({
  name: 'xpLevel'
})
export class XpLevelPipe implements PipeTransform {

  transform(level: XpLevelEnum): string {
    switch (level) {
      case XpLevelEnum.Beginner:
        return '#9CA3AF';
      case XpLevelEnum.Novice:
        return '#F59E0B';
      case XpLevelEnum.Intermediate:
        return '#3B82F6';
      case XpLevelEnum.Advanced:
        return '#10B981';
      case XpLevelEnum.Expert:
        return '#8B5CF6';
      default:
        return '#9CA3AF';
    }
  }
}